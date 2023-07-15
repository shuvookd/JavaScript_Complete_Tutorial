//Search in array
var arr1 = [4, 7, 2, 6, 8, 4, 55, 9, 89, 27, 7];
var find = 7;
var isFound = false;
for (var i = 0; i < arr1.length; i++) {
  if (arr1[i] === find) {
    console.log("Data Found at index " + i);
    isFound = true;
    break;
  }
}
if (!isFound) {
  console.log("Data not Found!");
}
