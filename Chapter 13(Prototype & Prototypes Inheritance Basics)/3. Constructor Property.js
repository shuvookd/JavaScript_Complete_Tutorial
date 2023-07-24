//Constructor Property
function Person(name) {
    this.name = name
}
// console.log(Object.getPrototypeOf(p1))
// p1.__proto__
console.log(Person.prototype)
Person.prototype.PI = 3.1416
var p1 = new Person('Shuvo')
var p2 = new Person('Das')
console.log(p1)
console.log(p2)

