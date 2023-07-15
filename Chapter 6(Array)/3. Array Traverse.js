// Array Traverse
var arr1 = [11, 22, 33, 44, 55];
for (var i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
/*
Output:
1
2
3
4
5
*/

//Value Update
var arr2 = [1, 2, 3, 4, 5];
for (var i = 0; i < arr2.length; i++) {
  arr2[i] = arr2[i] + 2;

  console.log(arr2[i]);
}
/*
Output:
3
4
5
6
7
*/

//Sum up array element
var arr3 = [1, 2, 3, 4, 5];
var sum = 0;
for (i = 0; i < arr3.length; i++) {
  sum += arr3[i];
}
console.log(sum);
//Output: 15

//Find Even Number
var arr4 = [11, 12, 13, 14, 15];
for (var i = 0; i < arr4.length; i++) {
  if (arr4[i] % 2 == 0) {
    console.log(arr4[i]);
  }
}
//Output: 12,14
