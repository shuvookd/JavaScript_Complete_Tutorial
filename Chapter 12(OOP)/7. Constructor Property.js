//Constructor Property

/*Factory Pattern
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

//Constructor Pattern
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

var rectCons = new Rectangle(1000, 800);
rectCons.draw();
*/

// var obj = {}
// var obj = new Object()

var str = new String('str')
console.log('My String is ' + str);

  
