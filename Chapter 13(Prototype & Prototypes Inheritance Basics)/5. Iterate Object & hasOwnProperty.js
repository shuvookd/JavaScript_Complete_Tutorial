//Iterate Object & hasOwnProperty
function Square(width) {
  this.width = width;
  this.getWidth = function () {
    console.log("Width is " + this.width);
  };
}

Square.prototype = {
  draw: function () {
    this.getWidth();
    console.log("Draw");
  },
  toString: function () {
    return "My width is = " + this.width;
  },
};
var sqr1 = new Square(10);
var sqr2 = new Square(5);
//যদি শুধু Instance member পেতে চাই তাহলে Keys ব্যবহার করব
console.log(Object.keys(sqr1))
//Object এর Prototype & Instance, সব member  পেতে চাই তাহলে for in Loop দরকার হবে।
for (var i in sqr1) {
    console.log(i)
}
