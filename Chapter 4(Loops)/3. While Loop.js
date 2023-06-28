//While Loop
/*
while(condition)
statement
increment;
*/
var i = 1;
while (i <= 10) {
    console.log(i + ' Shuvo');
    i++;
}


//Find a Random number by while loop
var is_running = true;
while(is_running){
    var rand  = Math.floor(Math.random() * 10 + 1)
    if(rand == 5){
        console.log('Winner Winner Chicken Dinner')
        is_running = false
    }
    else{
        console.log('Number is ' + rand)
    }

}