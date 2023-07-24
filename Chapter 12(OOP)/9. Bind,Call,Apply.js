/*
Normally Function call ছাড়াও অন্য ৩ ভাবে Function Call করা যায়।
Bind, Call, Apply method দিয়ে
*/

function myFunc(c, d) {
  console.log(this);
  console.log(this.a + this.b + c + d);
}

//Call, Apply (প্রায় Same)
myFunc.call({ a: 500, b: 1000 }, 2000, 4000);
myFunc.apply({ a: 500, b: 1000 }, [2000, 4000]);
//Apply এ Second argument হিসেবে Array দিতে হয়

// Bind
var testBind = myFunc.bind({ a: 500, b: 1000 }, 2000, 4000);
testBind()
//Bind Method  এ Function টা কে একটা Variable এ Store করতে হয়।
