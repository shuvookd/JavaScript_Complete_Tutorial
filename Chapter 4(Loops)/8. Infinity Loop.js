// Infinity Loop
//Find a Random number by Infinity Loop
for(; ;){
    var rand  = Math.floor(Math.random() * 10 + 1)
    if(rand == 5){
        console.log('Winner Winner Chicken Dinner')
        break
    }
    else{
        console.log('Number is ' + rand)
    }
}