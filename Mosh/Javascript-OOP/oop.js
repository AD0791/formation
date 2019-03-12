function Shape() {}
Shape.prototype.duplicate = function () {
    console.log('duplicate');
}


function Circle(radius) {
    this.radius = radius;
}

// the implicit relation with Objectbased
// Circle.prototype = Object.create(Object.Prototype)
// we can make it inherit from shapebased
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function () {
    console.log('draw');
}

const cercle = new Circle(1);
const forme = new Shape();

console.log(forme);
console.log(cercle);