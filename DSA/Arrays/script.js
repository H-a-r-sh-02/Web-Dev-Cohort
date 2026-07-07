const prompt = require("prompt-sync")();

/* Q) Sum of array's element?
let arr = [1,2,3,4,5];
let sum = 0;
for(let i=0; i<arr.length; i++) {
    sum += arr[i];
}
console.log(sum); */
/* Q) Max element from an Array? 
let arr = [12, 53, 20, 1, 5];
let max=arr[0];
for(let i=1; i<arr.length; i++) {
    if(arr[i] > max) max = arr[i];
}
console.log(max); */
/* Q) Second max element from an Array? 
let arr = [12,45,20,89,34];
let max=arr[0], temp, secondMax=arr[1]; 
if (max < secondMax) {
    temp = max;
    max = secondMax;
    secondMax = temp;
}

for(let i=2; i<arr.length; i++) {
    if(arr[i] > max) {
        secondMax = max;
        max = arr[i];
    } else if(arr[i] > secondMax && arr[i] !== max) {
        secondMax = arr[i];
    }
}
console.log(secondMax); */
/* Q) Reverse an Array?
1st Approach: Using Extra Array
let arr = [1,2,3,4,5];
let reverseArr = new Array(arr.length), j=0;
for (let i=arr.length-1; i>=0; i--) {
    reverseArr[j] = arr[i];
    j++; 
}
console.log(reverseArr);

2nd Approach: Swapping(Two-pointer method)
let i=0, j=arr.length-1;
while(i<j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log(arr); */
/* Q) All zeroes to left and all ones to right?
let arr = [0,1,1,0,0,1,0,1];
let i=0,j=0;
while(i<arr.length) {
    if(arr[i] == 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    }
    i++;
}
console.log(arr); */
/* Q) Array left rotation by 1? same logic for the right rotation!
let arr = [1,2,3,4,5];
let temp = arr[0];
for(let i=0; i<arr.length-1; i++) {
    arr[i] = arr[i+1];
}
arr[arr.length-1] = temp;
console.log(arr); */
/* Q) Array left rotation by K elements?
1st approach not optimised (using nested loop):
let arr = [1,2,3,4,5];
let k=3;
k = k%arr.length;
for(let j=0; j<k; j++) {
    let copy = arr[0];
    for(let i=0; i<arr.length-1; i++) {
    arr[i] = arr[i+1];

}
arr[arr.length-1] = copy;
}
console.log(arr);

2nd approach (Extra Space by using a temp array of same length):
let temp = new Array(arr.length);
let k=2;
k = k%arr.length;

for (let i=0; i<arr.length; i++) {
    temp[i] = arr[(i+k)%arr.length];
}
console.log(temp);

3rd approach (Two pointer):
let k = Number(prompt("Enter a number: "));
k = k%arr.length;
reverse(arr, 0, k-1);
reverse(arr, k, arr.length-1);
reverse(arr, 0, arr.length-1);
console.log(arr);
function reverse(arr, i, j) {
    while(i<j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
} */
/* Q) Linear search an array- if element found print the index else -1? 
let target = Number(prompt("Enter a number: "));
let arr = [10,2,5,3,15,19,69,20];
let index = -1;
for(let i=0; i<arr.length; i++) {
    if (arr[i] == target) {
        index = i;
        break;
    }
}
console.log(index); */
/* Q) Binary search an array- if element found print the index else -1
Array should be sorted!
let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let target = Number(prompt("Enter a number: "));
binarySearch(arr, target);
if(binarySearch(arr, target) == -1) console.log("elem not found");
else console.log("elem found");
function binarySearch(arr, target) {
  let s = 0,
    e = arr.length - 1;
  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    if (arr[mid] === target) return "elem found";
    else if (arr[mid] < target) s = mid + 1;
    else e = mid - 1;
  }
  return -1;
}
 */
