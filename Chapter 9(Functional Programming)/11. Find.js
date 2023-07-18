//Find from array
var arr = [1, 2, 6, 3, 7, 4, 9, 1, 5];

//Find value from array
/*
var result = arr.find(function (value) {
    return value === 4
})
console.log(result)//4
*/

//Find index number from array
/*
var result = arr.findIndex(function (value) {
    return value === 4
})
console.log(result)//5
*/

//Without function
function myFind(arr, cb) {
  for (i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr[i]; //Number
      //return i//Index
    }
  }
}
//Find Number
var result = myFind(arr, function (value) {
  return value === 9;
});
console.log(result); //9

//Find Array Index
var result = myFind(arr, function (value) {
  return value === 9;
});
console.log(result); //6
