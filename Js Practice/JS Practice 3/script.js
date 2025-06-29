// ARRAYS: Using prebuilt methods
// 17) Find the second largest number in an array.
// 18) Sort an array in descending order.
// 19) Reverse an array without using .reverse().
// 20) Find the most frequent element in an array.

// Solution 17:Using .sort() method
// let arr = [1,3,5,37,9,23,2,3,5,54,521,0,7,8,90];
// unique array
// let newArr = [...new Set(arr)];
// sort array descending order
// let sortArr = newArr.sort(function(a,b){
//     return b-a;
// });
// 1st arr[1]
// console.log(sortArr[1]);

// Solution 18:
// let arr = [1,2,3,4,8,5,9,10];
// let sortArr = arr.sort((a,b)=>b-a{
// });
// console.log(sortArr);

// Solution 19:
// let arr = [1,2,3,4,5,6,7,8,9];
// let arr2 = [];
// for(let i = arr.length-1; i>=0; i--){
//     arr2.push(arr[i]);
// }

// Solution 20: Kaun sabse jada baar aaya
//  let arr = [3,4,1,3,4,6,7,6];
//  let obj = {};
//  let obj = new Object;
// arr.forEach((val)=>{
//     obj[val] === undefined ? (obj[val] = 1) : obj[val]++;   
// });
// console.log(obj);
// OR WE CAN ALSO USE IF-ELSE
