//1st Prototypical Inheritance
function Shape() {}

Shape.prototype = {
  common: function () {
    console.log("I am common method");
  },
};

function Square(width) {
  this.width = width;
}
Square.prototype = Object.create(Shape.prototype);

Square.prototype.draw = function () {
  console.log("Drawing");
};

var shape = new Shape();
var sqr = new Square(50);

//shape-> Shape -> object
// sqr -> Square -> object
//sqr->Square->Shape->Object
  
function Circle() {
    
}
Circle.prototype = Object.create(Shape.prototype)
var circle = new Circle(50)