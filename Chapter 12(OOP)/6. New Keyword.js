/*New Keyword in Javascript

New Keyword ৩ টি কাজ করে
1. Empty Object Create করে
2. Constructor এর সাথে This কে Bind করে
3. Prototype  কে  Copy করে  Empty Object এর সাথে  Inherit করে দেয়
*/

var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
  this.draw = function () {
    console.log("I am a Rectangle");
    this.printProperties();
    //console.log(this);
  };
  this.printProperties = function () {
    console.log("My width is " + this.width);
    console.log("My height is " + this.height);
  };
};

/*Built in New Function
var rect1 = new Rectangle(1000, 800);
rect1.draw();
*/

//Without Function
function myNew(constructor) {
  var obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  var argsArray = Array.prototype.slice.apply(arguments);
  constructor.apply(obj, argsArray.slice(1));
  return obj;
}

var rect2 = myNew(Rectangle, 45, 55);
rect2.draw();
/*
Output: 
I am a Rectangle
My width is 45
My height is 55
*/
