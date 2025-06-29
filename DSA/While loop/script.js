// 1) sum of numbers
// let n = Number(prompt("enter a number"));
// let sum = 0;
// while(n>0){
//    let sep = n%10;
//     sum += sep;
//     n = Math.floor(n/10);
// }
// console.log(sum);

// 2) Reverse Of Number
// let num = Number(prompt("enter a number"));
// let rev = 0;
// while(num>0){
//     let re = num%10;
//     rev = (rev*10) + re;
//     num = Math.floor(num/10);
// }
// console.log(rev);

// 3) Automorphic Number
// let num = Number(prompt("enter a number"));
// let copy = num;
// let sq = num*num;
// let count  = 0;
// while(num>0){
//     count++;
//     num = Math.floor(num/10);
// }
// if(sq%Math.pow(10,count) == copy) console.log("Automorphic number");
// else console.log("Not a automorphic number");

// 4) Strong Number
// let num = Number(prompt("enter a number"));
// let copy = num;
// let sum = 0;
// while(num>0) {
//     let digit = num%10;
//     let fact = 1;
//     for(let i=1; i<=digit; i++) {
//         fact *=i;
//     }
//     sum += fact;
//     num =  Math.floor(num/10);
// }
// if(sum == copy) console.log("Strong Number");
// else console.log("Not A Strong Number");