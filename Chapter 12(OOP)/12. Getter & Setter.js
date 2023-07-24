// Getter and Setter in JS
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
  //   this.getPosition = function () {
  //     return position;
  //   };
  this.draw = function () {
    console.log("I am a Rectangle");
    printProperties();
    console.log("Position X = " + position.x + ", Y = " + position.y);
  };

  Object.defineProperty(this, "position", {
    get: function () {
      return position;
    },
    //Setter
    set: function (Value) {
      position = Value;
    },
  });
};

var rectCons = new Rectangle(45, 30);
// rectCons.draw();
// console.log(rectCons.getPosition());
console.log(rectCons.position); //{x: 50, y: -60} Getter value

rectCons.position = {
  x: 500,
  y: -1000,
};
console.log(rectCons.position); //{x: 500, y: -1000} Setter Value
