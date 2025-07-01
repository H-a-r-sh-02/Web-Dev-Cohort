// JavaScript Advanced HOFs,Callbacks, and Closures:
// 1) Create a function that takes a callback and executes it after every `n` seconds indefinitely.
// 2) Implement a function that returns a function with a preset greeting (Closures).
// 3) Implement a function that takes a callback and only executes it once (HOF + Closure).
// 4) Implement a function that throttles another function (HOF + Closures).

// Solution 1:
// function abcd(fn,n){
//     setInterval(fn,n);
// }
// abcd(function(){
//     console.log("callback");
// },2000);

// Solution 2:
// function greet(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }
// let pregreet = greet("Hello!");
// pregreet("Harsh");

// Solution 3:
// function ab(cb){
//     let executed = false;
//     return function(){
//         if(!executed){
//             executed = true;
//         cb();
//         }
//         else{
//             console.error("executed once!");
//         }
//     }
// }
// let newFn = ab(function(){
//     console.log("callback");
// });
// newFn();
// newFn();

// Solution 4:
// function throttle(fn,delay){
//     let lastCall = 0;
//     return function(){
//         let current = Date.now();
//         if(current - lastCall >= delay){
//             lastCall = current;
//             fn();
//         }
//     }
// }
// let throt = throttle(function(){
//     console.log("will run in 2 seconds!");
// },2000);
// throt();

