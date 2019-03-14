function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}


function Circle(radius, color) {
    this.radius = radius;
    // Inherit a property from the call method
    Shape.call(this, color);
}
// we reset the prototype 
Circle.prototype = Object.create(Shape.prototype);
//  we should also reset the constructor
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log('draw');
}

const cercle = new Circle(1, "red");
const forme = new Shape("blue");

console.log(forme);
console.log(cercle);