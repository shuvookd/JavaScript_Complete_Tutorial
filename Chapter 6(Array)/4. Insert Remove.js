//Array Insert/ Remove
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

// Insert 9 to index 3
arr1[3] = 9;
console.log(arr1); //[1, 2, 3, 9,5, 6, 7, 8 ]

// Push element in last
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
arr2.push(9);
console.log(arr2); //[1, 2, 3, 4, 5, 6, 7, 8 ,9]

// Push element in First
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
arr3.unshift(9);
console.log(arr3); //[9,1, 2, 3, 9,5, 6, 7, 8]

//Element Insert/Delete/Update in fixed place
var arr4 = [1, 2, 3, 4, 5, 6, 7, 8];

arr4.splice(2, 0, 22); //Insert
console.log(arr4); //[1, 2, 22, 3, 4, 5,  6,  7, 8]

arr4.splice(2, 1); //Delete
console.log(arr4); //[1, 2, 3, 4, 5,  6,  7, 8]

arr4.splice(2, 1, 222); //Update/Replace
console.log(arr4); //[1, 2, 222 ,4, 5,  6,  7, 8]

//Remove Last item
arr4.pop();
console.log(arr4); //[1, 2, 22, 33, 3,4, 5,  6,  7, 8]

//Remove First item
arr4.shift();
console.log(arr4); //[2, 22, 33, 3,4, 5,  6,  7, 8]
