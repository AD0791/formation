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

  accessRadius() {
    // to access the radius property
    // we reference the key here
    return _radius.get(this);
  }
  accDraw() {
    return _draw.get(this)();
  }
}

const c = new Circle(1);
console.log(c.accDraw());
