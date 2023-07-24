/*Abstruction
User বাইরে থেকে সব Data Excess  করতে পারবে না। শুধু কিছু ডাটা excess  থাকবে।

Note: Constructor এর ভিতর কোনো Data কে variable এর ভিতর Store  করলে এই Data বাইরে থেকে  eccess পাওয়া যাবে না। তাই এভাবে  data কে private করা হয়।
*/

var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
  var position = {
    x: 50,
    y: -60,
  };
  var printProperties = function () {
    console.log("My width is " + this.width);
    console.log("My height is " + this.height);
  }.bind(this);
  this.draw = function () {
    console.log("I am a Rectangle");
    printProperties();
    console.log("Position X = " + position.x + ", Y = " + position.y);
  };
};

var rectCons = new Rectangle(1000, 800);
rectCons.draw();
