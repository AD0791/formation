// An intermediate funciton to handle the inheritance
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

// parent
function Shape(color) {
    this.color = color;
}
Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

// child
function Circle(radius) {
    this.radius = radius;
}
Circle.prototype.draw = function () {
    console.log('draw');
}
// child-parent
extend(Circle, Shape);

// More to it
Circle.prototype.duplicate = function () {
    Shape.prototype.duplicate.call(this);
    console.log('I have override this method');
}

const cercle = new Circle(1);
const forme = new Shape("blue");


console.log(forme);
console.log(cercle);