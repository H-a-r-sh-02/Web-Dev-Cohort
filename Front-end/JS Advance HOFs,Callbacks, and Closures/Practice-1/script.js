// JavaScript Challenges on HOFs,Callbacks,and Closures:
// 1) Create a function that takes another function as an argument and calls it after 3 seconds(HOF + Callback).
// 2) Implement your own version of ".map()" as a Higher-order function.
// 3) Write a function that uses Closures to create a counter.
// 4) Implement a function that limits another function can be called (Closure + HOF).

// Solution 1:
// function abcd(fn){
//     setTimeout(fn,3000);
// }
// abcd(function(){
//     console.log("Calls after 3sec");
// });

// Solution 2:
// let arr = [1,2,3,4,5];
// function hop(a,fn){
//     let newArr=[];
//     for(let i = 0; i<a.length; i++){
//         newArr.push(fn(arr[i]));
//     }
//     return newArr;
// }
// let ans = hop(arr,function(val){
//     return val+2;
// });
// console.log(ans);

// Solution 3:
// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }
// let fn = counter();
// let a =0;
// while(a<10){
//     fn();
//     a++;
// }

// Solution 4:
// function limiter(li,fn){
//     let limit = 0;
//     return function() {
//         if(limit < li){
//             limit++;
//             fn();
//         }
//         else{
//             console.error("Limit is reached, Buy Pro Pack for more Limit!");
//         }
//     }
// }
// let fnlimiter = limiter(3,function(){
//     console.log("Call only till the limit");
// });
