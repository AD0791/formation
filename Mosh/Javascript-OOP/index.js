import {
  Circle
} from "./circle.js";

const s = new Circle(10);
console.log(s);
console.log(s.draw());

// an error console
// [Error] SyntaxError: Unexpected token '{'. import call expects exactly one argument.
//	(anonymous function) (oop.js:1)

// without webpack, we will do a quick fix.
// in oop.html and oop.js