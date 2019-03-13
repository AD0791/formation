function Shape() {}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}


function Circle(radius) {
    this.radius = radius;
}
// we reset the prototype 
Circle.prototype = Object.create(Shape.prototype);
//  we should also reset the constructor
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log('draw');
}

const cercle = new Circle(1);
const forme = new Shape();

console.log(forme);
console.log(cercle);