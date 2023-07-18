//Sort Function
var arr = [1, -3, -1, 0, 4, 1, 1, 4, 8, 4, 5, 8, 5, 7, 2];

/*
arr.sort();
console.log(arr); [-1, -3, 0, 1, 1, 1,2,  4, 4, 4, 5, 5, 7,  8, 8] Not Working Properly
*/

//With Function
arr.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(arr); //[-3, -1, 0, 1, 1, 1,2, 4, 4, 4, 5, 5, 7,  8, 8] Working Properly

var person = [
  {
    name: "A",
    age: 24,
  },
  {
    name: "B",
    age: 19,
  },
  {
    name: "C",
    age: 26,
  },
  {
    name: "D",
    age: 21,
  },
];
/*
person.sort();
console.log(person);

Output:
[
    { name: 'A', age: 24 },
    { name: 'B', age: 19 },
    { name: 'C', age: 26 },
    { name: 'D', age: 21 }
]
*/

//With Function
person.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});
console.log(person);
/*
Output:
[
  { name: 'B', age: 19 },
  { name: 'D', age: 21 },
  { name: 'A', age: 24 },
  { name: 'C', age: 26 }
]
*/

//Every Function
var arr1 = [1, 3, 1, 0, 4, 1, 1, 4, 8, 4, 5, 8, 5, 7, 2];
var result1 = arr1.every(function (value) {
  return value % 2 === 0;
});
console.log(result1); //false

var result2 = arr1.every(function (value) {
  return value >= 0;
});
console.log(result2); //true

//Some Function
var arr2 = [1, 3, 1, -1, 0, 4, 1, 1, 4, 8, 4, 5, 8, 5, 7, 2];
var result3 = arr2.some(function (value) {
  return value % 2 === 1;
});
console.log(result3); //true

var result4 = arr2.some(function (value) {
  return value < 0;
});
console.log(result4); //true
