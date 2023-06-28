//For Loop
/*
for(initializer; condition; increment){
    statement;
}
*/

//Print Name 100 times
for (var i = 1; i <= 100; i++) {
    console.log((i) + ' Shuvo')
}

//Print odd number
for (i = 0; i <= 100; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

//Print even number
for (var i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//Sum number from 0 to 100
var sum = 0;
for (var j = 0; j <= 100; j++) {
    console.log(sum + "+" + j + "=" + (sum + j))
    sum = sum + j;

}
console.log("Result =" + sum);