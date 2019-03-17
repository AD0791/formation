const _radius = new WeakMap();
const _draw = new WeakMap();
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
    // ()=> or function()
    _draw.set(this, () => {
      console.log("draw");
    });
  }

  // let's access radius property as read-only
  // a new way to implement a getters
  get radius() {
    return _radius.get(this);
  }
  // a setters
  set radius(value) {
    if (value <= 0) {
      throw new Error('Invalid Entry')
    };
    _radius.set(this, value);
  }
}

const c = new Circle(1);
console.log(c.radius);