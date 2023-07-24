//Functions are Object in JavaScript
function test() {
  console.log("Something");
}
console.log(test.name, test.length);

var Rect = new Function(
  "width",
  "height",
  `this.width = width;
this.height = height;
this.draw = function () {
  console.log("I am a Rectangle");
  this.printProperties();
  //console.log(this);
};
this.printProperties = function () {
  console.log("My width is " + this.width);
  console.log("My height is " + this.height);
};`
);
var rect1 = new Rect(55, 44);
console.log(rect1);

