// the problem:

// function Toffee() {
//     this.name = "alpenlibe";
//     this.sayShape = function() {
//         console.log("round");
//     }
// }
// let t1 = new Toffee();
// here the sayShape function is taking space everytime when a new object is instanced. This is a wrong way to do that instead we create the function prototype and when a object is created by the constructor function it don't take extra space! 

// function Toffee(name) {
//     this.name = name;
// }
// Toffee.prototype.price = 3;
// let t1 = new Toffee("alpenlibe");
