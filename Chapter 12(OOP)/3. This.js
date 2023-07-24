// This in OOP
//Example 1
function myFunc() {
  console.log(this);
}
new myFunc();

//Example 2

var rect = {
  width: 100,
  height: 50,
  draw: function () {
    console.log("I am a Rectangle");
    this.printProperties();
    console.log(this);
  },
  printProperties: function () {
    console.log("My width is " + this.width);
    console.log("My height is " + this.height);
  },
};
rect.draw();

var another = {
  width: 47,
  height: 56,
  print: rect.printProperties,
};
another.print();

/*
This এর ৩ টি টার্ম
1. This যে object  এ ব্যবহার করা হবে সেই object কেই Reffer করবে
2. কোনো Object ছাড়া যেকোনো জায়গার This ব্যবহার করলে Windo Object কে  Reffer করবে
3. This  এর  Change হতে পারে।  যে Executional Point এর জন্য This ব্যবহার করা হবে তার Value পাবে ।
*/
