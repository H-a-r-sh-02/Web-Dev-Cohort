// First
// let n = Number(prompt("Give a number!"));
// for(let i=0; i<n; i++){
//     console.log("Hello World!");
// }

// Second
// let num = Number(prompt("Give a number"));
// for(let i=1; i<=num; i++){
//     console.log(i);
// }

// Third
// let n = Number(prompt("Enter a number!"));
// for(let i=n; i>=1; i--){
//     console.log(i);
// }

// Fourth
// let num = Number(prompt("Give the number"));
// for(let i=1; i<=10; i++){
//     console.log(`${num}*${i} = ${num*i}`);
// }

// Fifth
// let n = Number(prompt("enter number!"));
// let sum = 0;
// for(let i=1; i<=n; i++){
//     sum += i;
// }
// console.log(sum);

// Sixth
// let n = Number(prompt("Give a number!"));
// let fact = 1;
// for(let i=n; i>=1; i--){
//     fact *= i;
// }
// console.log(fact);

// Seventh
// let num = Number(prompt("Enter the number!"));
// let even = 0;
// let odd = 0;
// for(let i=1; i<=num; i++){
//     if(i%2 == 0){
//         even += i;
//     }
//     else{
//         odd += i;
//     }
// }
// console.log(`even = ${even}, odd = ${odd}`);

// Eight
    // let num = Number(prompt("enter the number!"));
    // for(let i=1; i<=num/2; i++){
    //     if(num%i == 0)console.log(i);
    // }
    // console.log(num);

// Ninth-(3 Approaches)

// 1st Approach
// let n = Number(prompt("enter a number"));
// let isPrime = true;
// for(let i=2; i<n; i++){
//     if(n%i == 0) {
//       isPrime = false;
//         break;
//     }
// }   
// if(isPrime) console.log("isPrime");
// else console.log("isNotPrime");

// 2nd Approach
// let n = Number(prompt("enter a number!"));
// let isPrime = true;
// for(let i=2; i<=n/2; i++){
//     if(n%i == 0){
//         isPrime = false;
//         break;
//     }
// }
// if(isPrime) console.log("isPrime");
// else console.log("isNotPrime");

// 3rd Approach - (Efficient approach)
// let n = Number(prompt("enter a number!"));
// let isPrime = isPrimeFun(n);
// function isPrimeFun(n){
//     if(n<=1)  return false;
//     if(n == 2)  return true;
//     if(n%2 === 0) return false;
//     for(let i=3; i<=Math.floor(Math.sqrt(n)); i+=2){
//         if(n%i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime);

// Tenth
// let a = Number(prompt("enter a number")), b = Number(prompt("enter second number"));
// let pow = 1;
// for(let i=0; i<b; i++){
//     pow *= a;
// }
// console.log(pow);

