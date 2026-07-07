let prompt = require("prompt-sync")();

/* 
let size = Number(prompt("Enter size: "));
let arr = new Array(size);
let innerSize = Number(prompt("enter inner array size"));

for (let i=0; i<arr.length; i++) {
  arr[i] = new Array(innerSize);
  for (let j=0; j<arr[i].length; j++) {
    arr[i][j] = Number(prompt("enter the value!"));
  }
}
console.log(arr);
 */

/* sum of diagonals of a matrix
let arr = [[1,2,3], [4,5,6], [7,8,9]];
let leftSum=0, rightSum=0;
for (let i=0; i<arr.length; i++) {
 for (let j=0; j<arr[i].length; j++) {
  if (i == j) leftSum += arr[i][j];
  if (i+j == arr.length-1) rightSum += arr[i][j];
 }
}
console.log ("leftSum = ", leftSum, "rightSum = ", rightSum);
 */

// Jagged Array 
let size = Number(prompt("Enter size: "));
let arr = new Array(size);

for (let i=0; i<arr.length; i++) {
  let innerSize = Number(prompt("Enter inner array size: "));
  arr[i] = new Array(innerSize);
  for (let j=0; j<arr[i].length; j++) {
    arr[i][j] = Number(prompt("Enter Value: "));
  }
}
console.log(arr);
