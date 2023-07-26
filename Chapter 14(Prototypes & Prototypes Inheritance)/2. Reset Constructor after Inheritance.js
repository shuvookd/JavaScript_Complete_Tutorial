// Reset constructor After inheritance
//1st Prototypical Inheritance
function Shape() {}

(Shape.prototype.common = function () {
  console.log("I am common method");
}),
  function Square(width) {
    this.width = width;
  };
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.draw = function () {
  console.log("Drawing");
};

var shape = new Shape();
var sqr = new Square(50, "Green");

//shape-> Shape -> object
// sqr -> Square -> object
//sqr->Square->Shape->Object
