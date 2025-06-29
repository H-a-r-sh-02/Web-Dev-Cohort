// Old Method when CLASSES are not defined in JS
function CupCake() {
    this.shape = "round";
    this.taste = "sweet";
}
var cupcake1 = new CupCake(); 

// New Method with CLASSES
class Toffee {
    constructor(name,color,shape) {
        this.name = name;
        this.shape = shape;
        this.color = color;
    }
}
 
let t1 = new Toffee("alpanlibee","brown","circle");