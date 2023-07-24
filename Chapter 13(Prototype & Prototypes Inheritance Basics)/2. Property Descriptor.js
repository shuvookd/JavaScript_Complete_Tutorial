//Property Descriptor
var person = {
    name: 'Shuvo'
}
console.log(person)

for (var i in person) {
    console.log(i)//name
}
// console.log(Object.keys(person))

//Show Property Descriptor
// var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
// console.log(descriptor)
/*
Output:
{value: 'Shuvo', writable: true, enumerable: true, configurable: true}
configurable: true
enumerable: true
value: "Shuvo"
writable: true
[[Prototype]]: Object
*/

// let baseObj = Object.getPrototypeOf(person)
// let descriptor = Object.getOwnPropertyDescriptors(baseObj, 'toString')
// console.log(descriptor)

Object.defineProperty(person, 'name', {
    enumerable: false,
    writable: false,
    configurable: false,
    value:'Shuvo Kumar Das'
})

