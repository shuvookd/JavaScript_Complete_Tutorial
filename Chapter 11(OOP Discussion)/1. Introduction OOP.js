//Introduction OOP

/*
Normal Way
var width = 10
var height = 20

function calcArea(width, height) {
    return width * height
}
function calcRnage(width, height) {
    return 2 * (width * height)
}
var area = calcArea(width, height)
var range = calcRnage(width, height)
*/

//With Object Representation

var rect = {
  width: 10,
  height: 20,
  calcArea: function () {
    return this.width * this.height;
  },
  calcRange: function () {
    return 2 * (this.width * this.height);
  },
};
var area = rect.calcArea();
var range = rect.calcRange();