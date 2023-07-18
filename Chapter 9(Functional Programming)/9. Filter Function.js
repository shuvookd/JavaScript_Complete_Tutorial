//Filter Function
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*var filterArr = arr.filter(function (value) {
  return value % 2 === 0;
});
console.log(filterArr);
*/
// Without Function
function myFiler(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(
  myFiler(arr, function (value) {
    return value % 2 === 0;
  })
); //[ 2, 4, 6, 8 ]
console.log(
  myFiler(arr, function (value) {
    return value % 2 === 1;
  })
); //[ 1, 3, 5, 7, 9 ]
