// String Length
var str = 'Some String'

var length = 0
while (true) {
    if (str.charAt(length) === '') {
        break
    } else {
        length++
    }
}

console.log(length)//11

//length
console.log(str.length)//11 

