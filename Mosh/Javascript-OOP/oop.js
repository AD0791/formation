// parent class
class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log("move");
  }
}

// Child Class
class Circle extends Shape {
  constructor(radius, color) {
    // we must used the constructor of the parent
    // class.
    super(color);
    this.radius = radius;
  }
  draw() {
    console.log(" we must use super");
  }
  // we can access the moves at the same time
  move() {
    super.move(); // for the shape
    console.log("Circle Move");
  }
}

const c = new Circle(1, "blue");
console.log(c);
console.log(c.move());
