//Class is just a factory to create Multiple Obejct without Code Duplication
class Rect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calcArea() {
    return this.width * this.height;
  }
  calcRange() {
    return 2 * (this.width * this.height);
  }
}
var rect1 = new Rect(10, 20);
var rect2 = new Rect(70, 46);
var rect3 = new Rect(7, 6);
