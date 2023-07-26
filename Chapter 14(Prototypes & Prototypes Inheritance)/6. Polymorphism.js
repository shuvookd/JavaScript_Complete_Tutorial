//Polymorphism
function extend(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
function Shape(color) {
  this.color = color;
}

Shape.prototype = {
  common: function () {
    console.log("I am common method");
  },
};

function Square(width, color) {
  Shape.call(this, color);
  this.width = width;
}
extend(Shape, Square);

Square.prototype.draw = function () {
  console.log("Drawing");
};
extend(Shape, Circle);
Square.prototype.common = function () {
    console.log('I am calling from Square & I have overridden.')
}

var shape = new Shape('Purple');
var sqr = new Square(50, "Green");

//shape-> Shape -> object
// sqr -> Square -> object
//sqr->Square->Shape->Object

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}
extend(Shape, Circle);
Circle.prototype.common = function () {
 
  Shape.prototype.common.call(this),  console.log("I am calling from Circle & I have overridden.");
};
var circle = new Circle(50, "Black");

var shapes = [shape, sqr, circle]
for (var i of shapes) {
    i.common()
}
/*
Output:
I am common method
I am calling from Square & I have overridden.
I am common method
I am calling from Circle & I have overridden.
*/


