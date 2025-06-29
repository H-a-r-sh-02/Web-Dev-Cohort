// 1) Repeat hello
// let ask;
// do{
//     console.log("Hello");
//      ask = prompt("Want to print? yes:no").toLowerCase();
// }while(ask === "yes");

// 2) Guess the number
// let computerGenerated = Math.floor(Math.random()*100+1);
// let userInpt;
// do{
//     userInpt = Number(prompt("enter a number between 1-100"));
//     if(isNaN(userInpt) || userInpt>100 || userInpt<0){
//         console.log("enter a valid number");
//         continue;
//     }
//     else if(userInpt>computerGenerated) console.log("Too High");
//     else if(userInpt<computerGenerated) console.log("Too Low");
//     else console.log("Congratulations 🎉🥳 and the number is" + computerGenerated);
// }while(userInpt !== computerGenerated);

// WITH SWITCH CASES:

// 3) Simple Calculator
// let userInpt;
// do{
// let val1 = Number(prompt("enter a number"));
// let val2 = Number(prompt("enter a number"));
// let operator = prompt("Enter the Operation: +, -, *, /");
// switch(operator){
//     case "+": {
//         console.log(val1 + val2);
//         break;
//     }
//     case "-": {
//         console.log(val1 - val2);
//         break;
//     }
//     case "*": {
//         console.log(val1 * val2);
//         break;
//     }
//     case "/": {
//         if(val2 !== 0) console.log(val1/val2);
//         else console.log("Enter valid values");
//         break;
//     }
//     default: console.log("Enter a valid Operator");
// }
//     userInpt = prompt("want to Calculate more!: Yes or No").toLowerCase();
// }while(userInpt == "yes");

// 4) Project Restraunt
// let userChoice;
// do{
//     let choice = prompt("Select your preference: 'Starter', 'Meal', 'Desserts', 'Drinks'").toLowerCase();
//     switch(choice){
//         case "starter": {
//             let moreStarter;
//             do{
//                 let starterChoice = prompt("What you want in Starters (Please fill as given): 'Plated-Starters', 'Finger-Foods', 'Sharing-Platters', 'Buffet-Style', 'Soup & Broth Servings'");
//                 switch(starterChoice){
//                     case "Plated-Starters": {
//                         console.log("Bruschetta, mini tarts, shrimp cocktail");
//                         break;
//                     }
//                     case "Finger-Foods": {
//                         console.log("Mini spring rolls, sliders, stuffed mushrooms");
//                         break;
//                     }
//                     case "Sharing-Platters": {
//                         console.log("Mezze platters, charcuterie boards, nachos");
//                         break;
//                     }
//                     case "Buffet-Style": {
//                         console.log("hot & cold appetizers");
//                         break;
//                     }
//                     case "Soup & Broth Servings": {
//                         console.log("Varities of Soups & Multi-course meal");
//                         break;
//                     }
//                     default: console.log("The starter choice is not correct, Please select correct!");
//                 }
//                 moreStarter = prompt("want to check more Starters: Yes or No!").toLowerCase();
//             }while(moreStarter == "yes");
//             break;
//         }
//         case "meal": {
//             let moreMeal;
//             do{
//                 let mealChoice = prompt("What you want in Meals (Please fill as given): 'Plated-Service', 'Family Style Service', 'Buffet Service', 'Silver Service', 'Tray Service'");
//                 switch(mealChoice){
//                     case "Plated-Service": {
//                         console.log("Vegetable Stir-Fry with Tofu");
//                         break;
//                     }
//                     case "Family Style Service": {
//                         console.log("Chickpea Curry with Rice, Margherita Pizza");
//                         break;
//                     }
//                     case "Buffet Service": {
//                         console.log("Falafel with Hummus and Pita");
//                         break;
//                     }
//                     case "Silver Service": {
//                         console.log("Grilled Vegetable Skewers");
//                         break;
//                     }
//                     case "Tray Service": {
//                         console.log("Vegetable Lasagna");
//                         break;
//                     }
//                     default: console.log("The meal choice is not correct, Please select correct!");
//                 }
//                 moreMeal = prompt("want to check more Meals: Yes or No!").toLowerCase();
//             }while(moreMeal == "yes");
//             break;
//         }
//         case "desserts": {
//             let moreDesserts;
//             do{
//                 let dessertChoice = prompt("What you want in Desserts (Please fill as given): 'Plated-Dessert', 'Family Style Dessert', 'Trolley or Gueridon', 'Buffet-Style', 'Tray Service Dessert'");
//                 switch(dessertChoice){
//                     case "Plated-Dessert": {
//                         console.log("Chocolate lava cake with vanilla ice cream");
//                         break;
//                     }
//                     case "Family Style Dessert": {
//                         console.log("Big bowl of Fruit salad or trile");
//                         break;
//                     }
//                     case "Trolley or Gueridon": {
//                         console.log("Banana Foster or Cherries Jubilee");
//                         break;
//                     }
//                     case "Buffet-Style": {
//                         console.log("Assorted pastries, cupcakes, mini brownies, Puddings");
//                         break;
//                     }
//                     case "Tray Service Dessert": {
//                         console.log("Pre-sliced cake, fruit-cups, sweets");
//                         break;
//                     }
//                     default: console.log("The dessert choice is not correct, Please select correct!");
//                 }
//                 moreDesserts = prompt("want to check more Desserts: Yes or No!").toLowerCase();
//             }while(moreDesserts == "yes");
//             break;
//         }
//         case "drinks": {
//             let moreDrinks;
//             do{
//                 let drinkChoice = prompt("What you want in Drinks (Please fill as given): 'Table Service', 'Tray Service', 'Bar Service', 'Butlered Drink', 'Bottle Service'");
//                 switch(drinkChoice){
//                     case "Table Service": {
//                         console.log("soft-drinks, Bottled-water, wine, mojitos or margaritas");
//                         break;
//                     }
//                     case "Tray Service": {
//                         console.log("Champagne, mocktails or cocktails, juices");
//                         break;
//                     }
//                     case "Bar Service": {
//                         console.log("gin and tonic, Old Fashioned, Beers, soda");
//                         break;
//                     }
//                     case "Butlered Drink": {
//                         console.log("Aperitifs, Digestifs");
//                         break;
//                     }
//                     case "Bottle Service": {
//                         console.log("Vodka, Whiskey, wine, sparkling water bottles");
//                         break;
//                     }
//                     default: console.log("The drink choice is not correct, Please select correct!");
//                 }
//                 moreDrinks = prompt("want to check more Drinks: Yes or No!").toLowerCase();
//             }while(moreDrinks == "yes");
//             break;
//         }
//         default: console.log("choose the preference correctly!");
//     }
//     userChoice = prompt("want to check the others as well: Yes or No").toLowerCase();
// }while(userChoice == "yes");

