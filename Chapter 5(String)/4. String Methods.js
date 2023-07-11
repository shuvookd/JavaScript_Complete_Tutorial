// String Methods
var a = 'I am'
var b = 'Shuvo'

//concat()
var c = a.concat(' ', b)
console.log(c)// I am Shuvo

//subString()
var d = c.substring(5,10)
console.log(d) // Shuvo

//charAt()
console.log(d.charAt(0)) // S

//startsWith()
console.log(c.startsWith('I am')) //true
console.log(c.endsWith('Shuvo')) //true

//uppercase()
console.log(c.toUpperCase())//I AM SHUVO
//lowercase()
console.log(c.toLowerCase())//i am shuvo

//trip()
var e = '   Love   '
console.log(e.trim())//Love

//split()
console.log(c.split(' '))//[ 'I', 'am', 'Shuvo' ]