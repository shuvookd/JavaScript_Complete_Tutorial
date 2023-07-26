// Creating Extend Function
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

var shape = new Shape();
var sqr = new Square(50, 'Green');

//shape-> Shape -> object
// sqr -> Square -> object
//sqr->Square->Shape->Object

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}
extend(Shape, Circle);
var circle = new Circle(50, "Red");
