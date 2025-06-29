// // 1) Indian Currency Breakdown:
// let amount = Number(prompt("Enter the amount to be break down"));
// let denominations = [2000,500,200,100,50,20,10,5,2,1];
// let count = 0;
// if(amount>=denominations[0]){
//     count = Math.floor(amount/denominations[0]);
//     amount %= 2000;
//     console.log(`₨${denominations[0]}x${count}`);
// } if(amount>=denominations[1]){
//     count = Math.floor(amount/denominations[1]);
//     amount %= 500;
//     console.log(`₨${denominations[1]}x${count}`);
// } if(amount>=denominations[2]){
//     count = Math.floor(amount/denominations[2]);
//     amount %= 200;
//     console.log(`₨${denominations[2]}x${count}`);
// } if(amount>=denominations[3]){
//     count = Math.floor(amount/denominations[3]);
//     amount %= 100;
//     console.log(`₨${denominations[3]}x${count}`);
// } if(amount>=denominations[4]){
//     count = Math.floor(amount/denominations[4]);
//     amount %= 50;
//     console.log(`₨${denominations[4]}x${count}`);
// } if(amount>=denominations[5]){
//     count = Math.floor(amount/denominations[5]);
//     amount %= 20;
//     console.log(`₨${denominations[5]}x${count}`);
// } if(amount>=denominations[6]){
//     count = Math.floor(amount/denominations[6]);
//     amount %= 10;
//     console.log(`₨${denominations[6]}x${count}`);
// } if(amount>=denominations[7]){
//     count = Math.floor(amount/denominations[7]);
//     amount %= 5;
//     console.log(`₨${denominations[7]}x${count}`);
// } if(amount>=denominations[8]){
//     count = Math.floor(amount/denominations[8]);
//     amount %= 2;
//     console.log(`₨${denominations[8]}x${count}`);
// } if(amount>=denominations[9]){
//     count = Math.floor(amount/denominations[9]);
//     amount %= 1;
//     console.log(`₨${denominations[9]}x${count}`);
// }
// else{
//     console.info("The amount is invalid");
// }

// 2) Check and print category of movie based on rating.
// let name = prompt("Movie name please!");
// let rating = Number(prompt("Give the ratings!"));
// let msg = ["Flop", "Semi-hit", "Hit", "Super-Hit"];
// if(rating>0.0 && rating<=2.0){
//     console.info(`${name} is a ${msg[0]}.`);
// }
// else if(rating>2.1 && rating<=3.4){
//     console.log(`${name} is a ${msg[1]}`);
// }
// else if(rating>3.5 && rating<=4.5){
//     console.log(`${name} is a ${msg[2]}`);
// }
// else if(rating>4.6 && rating<=5.0){
//     console.log(`${name} is a ${msg[3]}`);
// }
// else{
//     console.info("Invalid Movie name or Rating");
// }

// 3) Take input and calculate salary as per the table.
// let yoS = Number(prompt("Enter the years of service!"));
// let gender = prompt("Tell your gender");
// let qualification = prompt("tell your highest qualification!");
// if(gender == "Male"){
//     if(qualification == "Post-Graduation"){
//         if(yoS>=10){
//             console.info("The salary for above information is 15000rs!");
//         }
//         else if(yoS<10){
//             console.info("The salary for above information is 10000rs!");
//         }
//     }
//     else if(qualification == "Graduate"){
//         if(yoS>=10){
//             console.info("The salary for above information is 10000rs!");
//         }
//         else if(yoS<10){
//             console.info("The salary for above information is 7000rs!");
//         }
//     }
//     else{
//         console.info("Qualification is not meet criteria!");
//     }
// }
// else if(gender == "Female"){
//     if(qualification == "Post-Graduation"){
//         if(yoS>=10){
//             console.info("The salary for above information is 12000rs!");
//         }
//         else if(yoS<10){
//             console.info("The salary for above information is 10000rs!");
//         }
//     }
//     else if(qualification == "Graduate"){
//         if(yoS>=10){
//             console.info("The salary for above information is 9000rs!");
//         }
//         else if(yoS<10){
//             console.info("The salary for above information is 6000rs!");
//         }
//     }
//     else{
//         console.info("Qualification is not meet criteria!");
//     }
// } 
// else{
//     console.info("The gender is not specified");
// }