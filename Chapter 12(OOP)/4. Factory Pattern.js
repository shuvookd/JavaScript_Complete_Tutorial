/* Repeted Task করার Way ২ টা
1. Fectory CanvasPattern
2. Constructor pattern
*/
//Factory Pattern
var createRect = function (width, height) {
  return {
    width: width,
    height: height,
    draw: function () {
      console.log("I am a Rectangle");
      this.printProperties();
      //console.log(this);
    },
    printProperties: function () {
      console.log("My width is " + this.width);
      console.log("My height is " + this.height);
    },
  };
};

var rectFact = createRect(10, 8);
rectFact.draw();