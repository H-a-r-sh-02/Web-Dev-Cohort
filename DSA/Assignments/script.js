// 1) INCREMENT AND DECREMENT OPERATORS:

// Q1: 
// let i = 11; 
// i = i++ + ++i; 
// console.log(i); // Ans = 24 

// Q2: 
// let a = 11 , b = 22, c; 
// c = a + b + a++ + b++ + ++a + ++b; 
// console.log("a=" + a); // a = 13
// console.log("b=" + b); // b = 24
// console.log("c=" + c); // c = 103

// Q3: 
// let i = 0; 
// i = i++ - --i + ++i - i--; 
// console.log(i); // Ans = 0

// Q4: 
// let b = true; 
// b++;   
// console.log(b); // Ans = 2

// 2) Complex Increment and Decrement Operations:

// Q5: 
// let i = 1, j = 2, k = 3; 
// let m = i-- - j-- - k--; 
// console.log("i=" + i); // i = 0
// console.log("j=" + j); // j = 1
// console.log("k=" + k); // k = 2
// console.log("m=" + m); // m = -4

// Q6: 
// let a = 1, b = 2; 
// console.log(--b - ++a + ++b - --a); // Ans = 0

// Q7: 
// let i = 19, j = 29, k; 
// k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++;
// console.log("i=" + i); // i = 19
// console.log("j=" + j); // j = 29
// console.log("k=" + k); // k = -20

// 3) Syntax Errors and Logical Issues:

// Q8: 
// let i = 11; 
// let j = --(i++); 
// console.log(j);// Gives error

// Q9: 
// let m = 0, n = 0; 
// let p = --m * --n * n-- * m--;
// console.log(p); // ans = 1

// Q10: 
// let a = 1; 
// a = a++ + ++a * --a - a--; 
// console.log(a);// ans = 5

// Q11: 
// let a = 11++; 
// console.log(a); // Error

// Q12: 
// let i = 0, j = 0; 
// console.log(--i * i++ * ++j * j++); // ans = 1


