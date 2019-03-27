import {
    Circle
} from "./circle";

const s = new Circle(10);
console.log(s);
console.log(s.draw());

// the changes to see how webpack reacts
console.log("Webpack will changes the bundle");