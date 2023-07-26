//Mixing in JS

function mixin(target, ...sources) { 
 Object.assign(target, ...sources)
}
var canWalk = {
  walk: function () {
    console.log("Walking...");
  },
};
var canEat = {
  eat: function () {
    console.log("Eating...");
  },
};
var canSwim = {
    swim: function () {
      console.log("Swimming...");
    },
  };
// var person = Object.assign({}, canWalk, canEat);
// person.name='Shuvo'
function Person(name) {
    this.name = name 
}

mixin(Person.prototype, canEat, canWalk)
// Object.assign(Person.prototype, canWalk, canEat)
var person = new Person('Shuvo')

console.log(person)
function GoldFish(name) {
    this.name = name 
}
mixin(GoldFish.prototype, canEat, canSwim)
var fish = new GoldFish('Golden Fish')
console.log(fish)

 