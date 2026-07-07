let prompt = require("prompt-sync")();
/* 1) Checking a ISBN Number:
let sum = 0;
let confirm;
do {
let n = prompt("enter a 10 digit number!");
if (n.length !== 10) console.log("invalid ISBN number, Enter a 10 digit number");
    for (let i = 0; i < 10; i++) {
        const number = parseInt(n[i]);
        if (isNaN(number)) console.log("invalid non-digit character");
        sum += number *(i+1);
    }
    if(sum%11 === 0) console.log("Valid ISBN");
    else console.log("Not a Valid ISBN");
    confirm = prompt("want to check some more ISBN's").toLowerCase();
} while (confirm == "yes"); */

/* 2) HCF/GCD: hint use Euclidean algorithm: GCD(a,b) = GCD(b, a%b)
(1st Approach):
let num1 = Number(prompt("Enter first number!"));
let num2 = Number(prompt("Enter second number!"));
let hcf = 1;
for (let i=2; i<=Math.floor(num1/2); i++) {
    if(num1%i === 0 && num2%i === 0) hcf = i;    
}
console.log(hcf);

(2nd Approach):
let num1 = Number(prompt("Enter first number!"));
let num2 = Number(prompt("Enter second number!"));
if(num1<num2) [num1, num2] = [num2, num1];
while(num1%num2 !==0) {
    let rem = num1%num2;
    [num1, num2] = [num2, rem];   
}
console.log(num2);
 */

/* 3) Harshad Number: hint extract digits using modulo (%) and integer division(//); 
let num = Number(prompt("Enter a number!"));
let copy = num;
let sum = 0;
while (num>0) {
    let digit = num%10;
    sum += digit;
    num = Math.floor(num/10);
}
if (copy%sum === 0) console.log("Harshad Number");
else console.log("Not a Harshad Number"); */

/* 4) Perfect Square: hint use sqrt(n), check if its an integer
let num = Number(prompt("Enter a number!"));
if (Math.sqrt(num)%1 === 0) console.log("Perfect Square");
else console.log("Not a Perfect Square"); */

/* 5) Abundant Number: hint use a loop to find proper divisors
let num = Number(prompt("Enter a number!"));
let sum = 0, i = 1;
while (i<=Math.floor(num/2)) {
    if(num%i === 0) sum += i;
    i++;
}
if (sum > num) console.log("Abundant Number");
else console.log("Not an Abundant Number"); */

/* 6) Fibonacci Series using Loop: hint use a loop and store previous two numbers
let range = Number(prompt("Enter a range!"));
let prev = 0, curr = 1;
for(let i=1; i<=range; i++) {
    process.stdout.write(prev + " ");
    let next = prev + curr;
    prev = curr;
    curr = next;
}
 */

/* 7) Find Numbers with Exactly X Divisors: hint use prime factorization (Java) 
let divisorValue = Number(prompt("Enter a number!"));//3
let range = Number(prompt("Enter a range!"));
for (let i = 1; i<=range; i++){
    let divisors = 0;
    for (let j=1; j<=i; j++) {
        if(i%j === 0) divisors++;       
    }
    if (divisors === divisorValue) console.log(i);
}
 */

/* 8) Prime Factors: Find all prime factors of a number: hint use division method
let num = Number(prompt("Enter a number!")); // 12 
let i = 2;
while (num>1) {
   if (num%i === 0){
    process.stdout.write(i + " ");
    num = Math.floor(num/i);
   }
   else i++;
}
 */

/* 9) Calculate area using switch statement
let shape = prompt("Enter a shape!").toLowerCase();
let area;
switch (shape) {
  case "circle":
    let radius = Number(prompt("Enter the radius!"));
    area = Math.PI * radius * radius;
    console.log("Area Of Circle: " + area.toFixed(2));
    break;

  case "rectangle":
    let length = Number(prompt("Enter the length!"));
    let width = Number(prompt("Enter the width!"));
    area = length * width;
    console.log("Area Of Rectangle: " + area.toFixed(2));
    break;

  case "triangle":
    let base = Number(prompt("Enter the base!"));
    let height = Number(prompt("Enter the height!"));
    area = (base / 2) * height;
    console.log("Area Of Triangle: " + area.toFixed(2));
    break;

  case "square":
    let side = Number(prompt("Enter the side!"));
    area = side * side;
    console.log("Area Of Square: " + area.toFixed(2));
    break;

  default:
    console.log("The shape choice is not correct, Please select correct!");
}
 */

/* 10) Neon Number:
let num = Number(prompt("Enter a number!"));
let copy = num;
let square = num*num;
let sum = 0;
while (square>0) {
    let digit = square%10;
    sum += digit;
    square = Math.floor(square/10);
}

if (sum === copy) console.log("Neon Number");
else console.log("Not a Neon Number"); */

// 11) Sum of Even indexed Fibonacci Numbers:
