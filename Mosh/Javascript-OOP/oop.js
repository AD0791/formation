const _radius = Symbol();
const _draw = Symbol();
class Circle {
    constructor(radius) {
        // bracket notation
        this[_radius] = radius;
    }
    // make this method private
    // this isn't an array
    [_draw]() {
        console.log("draw");
    }
};

const c = new Circle(1);
// we can't access the radius property or the
// _draw method by code
console.log(c);