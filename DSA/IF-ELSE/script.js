// Accept two no. and print the greatest.
// let a = Number(prompt("Enter first no."));
// let b = Number(prompt("Enter second no."));
// if(a>b)console.log(`${a} is greater`);
// else console.log(`${b} is greater`);    

// 2) Accept an integer and check it is even or odd.
// let a = Number(prompt("Enter the no."));
// if(a%2 == 0)console.log(`${a} is even`);
// else console.log(`${a} is odd`);

// 3) Accept name and age, valid for vote or not.
// let name = prompt("Enter the name");
// let age = Number(prompt("Enter the age!"));
// if(age>=18) console.log(`${name} is valid for vote!`);
// else console.log(`${name} is not valid for vote!`);

// 4) Accept three no. and print greatest among them.
// let a = Number(prompt("Enter first no!"));
// let b = Number(prompt("Enter second no!"));
// let c = Number(prompt("Enter third no!"));
// if(a>b && a>c)console.log(`${a} is greater!`);
// else if(b>a && b>c)console.log(`${b} is greater!`);
// else console.log(`${c} is greater`);

// 5)  Accept a year and check if it is a leap year or not.
// let year = Number(prompt("Enter a year"));
// let isLeap = false;
// if(year%4 == 0){
//     if(year%100 == 0){
//         if(year%400 == 0)console.log(`${year} is a leap year!`);
//             else console.log(`${year} is not a leap year!`);
//     }
//     else console.log(`${year} is a leap year`);
// }
// else console.log(`${year} is not a leap year!`);

// 6) Shop discount: 
//   Amount     Discount
//   0-5000       0%
//   5001-7000    5%
//   7001-9000    10%
//   >9000        20%

// let amount = Number(prompt("enter the amount"));
// let dis;
// if(amount>0 && amount<=5000) dis = 0;
// else if(amount>5000 && amount<=7000) dis = 5;
// else if(amount>7000 && amount<=9000) dis = 10;
// else if(amount>9000) dis = 20;
// else console.log("invalid amount");
// console.log(amount-(amount*dis)/100);

// 7) Electricity bill calculation. (It has 2 Approaches)
// Unit                 Price
// up to 100            4.2/unit
// 101-200              6/unit
// 201-400              8/unit
// more than 400        13/unit

// 1st Approach:
// let unit = Number(prompt("enter unit!"));
// let amount = 0;
// if(unit>0 && unit<=100) amount = unit*4.2;
// else if(unit>100 && unit<=200) amount = (100*4.2) + (unit-100)*6;
// else if(unit>200 && unit<=400) amount = (100*4.2)+(100*6)+(unit-200)*8;
// else if(unit>400) amount = (100*4.2) + (100*6) + (200*8) + (unit-400)*13;
// else console.log("invalid input");
// console.log(amount);

// 2nd Approach (Best, Reverse-Approach and independent IFs):
// if(unit>400){
//     amount = (unit-400)*13;
//     unit = 400;
// }
// if(unit>200 && unit<=400){
//     amount = amount + (unit-200)*8;
//     unit = 200;
// }
// if(unit>100 && unit<=200){
//     amount = amount + (unit-100)*6;
//     unit = 100;
// }
// amount = amount + (unit*4.2)
// console.log(amount);
