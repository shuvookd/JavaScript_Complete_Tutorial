//Calling Super With Method
function Shape(color) {
  this.color = color;
}

Shape.prototype.common = function () {
  console.log("I am common method");
};
function Square(width, color) {
  Shape.call(this, color);
  this.width = width;
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.draw = function () {
  console.log("Drawing");
};

// var shape = new Shape();
var sqr = new Square(50, "Green"); 
