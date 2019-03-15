// function constructor
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

// how you build class 
class Cercle {
    constructor(radius) {
        this.radius = radius;
        this.move = function () {
            console.log('will not be in the prototype');
        }
    }
    // let's define a method
    dessin() {
        console.log('dessin');
    }
}

const ci = new Circle(1);
const ce = new Cercle(2);

console.log(ci);
console.log(ce);

// All the method of ce or Cercle,
// define like the dessin method,
//will end up on the
// prototype.
// if we don't want that you have to do it like 
// move method, define on the constructor()