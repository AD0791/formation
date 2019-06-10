# Object Oriented Programming JS: Chapter 5 (ES6 Classes)

## Chapter 5 : ES6 Classes

There is a new way on implementing object in ES6 with using classes. There are not quite the same as other programming languages.

```javascript
// function constructor
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

// how you build class
class Cercle {
    constructor(radius) {
        this.radius = radius;
        this.move = function () {
            console.log('will not be in the prototype');
        }
    }
    // let's define a method
    dessin() {
        console.log('dessin');
    }
}

const ci = new Circle(1);
const ce = new Cercle(2);

console.log(ci);
console.log(ce);

// All the method of ce or Cercle,
// define like the dessin method,
//will end up on the
// prototype.
// if we don't want that you have to do it like
// move method, define on the constructor()

// in console
[Log] Circle {radius: 1, draw: function} (oop.js, line 26)
[Log] Cercle {radius: 2, move: function} (oop.js, line 27)
> typeof Cercle
< "function"

// class in javascript is a sugar of prototypes
```

### Hoisting

We know that in javascript. There is two way to define a function.

> Function declaration are hoisted. THis means that they are putted on top of the code at run time. In contrast function expression are not hoisted.

```javascript
// function declaration
function sayHello() {
  console.log("hello world");
}
// function expression
const goodBye = function() {
  console.log("Good bye my friend");
};
// becuase it's a function expression
// we have to put a semi-column at the end
```

> Unlike function, class declaration and class expression are not hoisted. So the following won't work.

```javascript
const cercle = new Circle();

// class declaration
class Circle {}
// class expression
const square = class {};
// in console
[Error] ReferenceError: Cannot access uninitialized variable.
	Global Code (oop.js:1)
```

### Static Method

```javascript
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    // instance method
    // draw method is link to this specific
    // Circle
    draw() {
        console.log('Draw');
    }
    // Static Method
    // it won't be avalaible for an instance of this
    // class
    static parse(str) {

    }
}

const cercle = new Circle(1);
console.log(cercle);
console.log(cercle.parse());
// in console
[Log] Circle {radius: 1} (oop.js, line 20)
[Error] TypeError: cercle.parse is not a function. (In 'cercle.parse()', 'cercle.parse' is undefined)
	Global Code (oop.js:21)
```

How to see the static method in action. To call static object, we don't need to call an instance of a class.

```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  // instance method
  // draw method is link to this specific
  // Circle
  draw() {
    console.log("Draw");
  }
  // Static Method
  // it won't be avalaible for an instance of this
  // class
  static parse(str) {
    console.log(str);
  }
}

const cercle = new Circle(1);
console.log(cercle);
console.log(Circle.parse("Static"));

// In console
[Log] Circle {radius: 1} (oop.js, line 20)
[Log] Static (oop.js, line 15)
```

Static objects are utility objects that are not bound to a particular objects.

```javascript
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    draw() {
        console.log('Draw');
    }
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(1);
    }
}

const cercle = Circle.parse('{"radius ": 1}');
console.log(cercle);

// in console
[Log] Circle {radius: 1} (oop.js, line 15)
```

### The this keyword

```javascript
const Circle = function () {
    this.draw = function () {
        console.log(this);
    }
};

const c = new Circle();

const draw = c.draw;

c.draw();
console.log(c.draw);
// will refer the window object
draw();

// in console
[Log] Circle {draw: function} (oop.js, line 3)
[Log] function () { (oop.js, line 17)
        console.log(this);
    }
[Log] Window {document: #document, NaN: NaN, window: Window, Infinity: Infinity, undefined: undefined, â€¦} (oop.js, line 3)
```

```javascript
'use strict'

const Circle = function () {
    this.draw = function () {
        console.log(this);
    }
};

const c = new Circle();

const draw = c.draw;

// method call
c.draw();

console.log(c.draw);

//function call
// by default this
// will refer the window object
// if i use strict mode we will get undefined
draw();

// in console
[Log] Circle {draw: function} (oop.js, line 5)
[Log] function () { (oop.js, line 16)
        console.log(this);
    }
[Log] undefined (oop.js, line 5)
```

Strict mode prevent us from modifying the window object.

> By default the body of our classes are in strict mode. As we can see:

```javascript
class Circle {
    draw() {
        console.log(this);
    }
};

const c = new Circle();
const draw = c.draw;
draw();

// in console
[Log] undefined (oop.js, line 3)
```

### Private Members

Abstraction means hiding the details and the complexity in order to show the essentials.

#### Using Symbols

In ES6 symbol is another primitives. A symbol is essentially an unique identifier.

```javascript
const _radius = Symbol();

class Circle {
    constructor(radius) {
        this[_radius] = radius;
    }
    draw() {
        console.log("draw");
    }
};

const c = new Circle(1);
// we can't access the radius property by code
console.log(c);
console.log(Object.getOwnPropertyNames(c));
console.log(Object.getOwnPropertySymbols(c));

// let's get the value of the radius property
let key = Object.getOwnPropertySymbols(c)[0];
console.log(key);
console.log(c[key]);
// in console
[Log] Circle {Symbol(): 1} (oop.js, line 14)
[Log] [] (0) (oop.js, line 15)
[Log] [Symbol()] (1) (oop.js, line 16)
[Log] Symbol() (oop.js, line 20)
[Log] 1 (oop.js, line 21)
```

```javascript
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
// in console
[Log] Circle (oop.js, line 18)
Symbol(): 1
Circle Prototype
constructor: function()
Symbol()()
Object Prototype
```

#### Using WeakMaps

A weakmap is essentially a dictionary where keys are objects and values can be anything.

```javascript
const _radius = new WeakMap();
const _draw = Symbol();
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  [_draw]() {
    console.log("draw");
  }
  accessRadius() {
    // to access the radius property
    // we reference the key here
    return _radius.get(this);
  }
}

const c = new Circle(1);
console.log(c.accessRadius());
// in console
[Log] 1 (oop.js, line 18)
```

```javascript
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
// in console
[Log] draw (oop.js, line 8)
[Log] undefined (oop.js, line 23)
```

> A good practice is to use a weakmap for each private properties and methods.

### getters and setters

Even If we can do some tricks with `Symbol` and `Weakmap` to create and access private properties and methods. As a best practice we are still able to use the getters and setters.

```javascript
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
// in console
[Log] 1 (oop.js, line 36)
> c.radius = -10;
< Error: Invalid Entry
> c.radius = 10;
< 10
```

### Inheritance

```javascript
class Shape {
  move() {
    console.log("move");
  }
}

// we can make Circle inherit from the Shape class
// with the extends command
class Circle extends Shape {
  draw() {
    console.log("Circle will inherit from Shape Class");
  }
}

const c = new Circle();
console.log(c);
// as we can see in console,
// in console
[Log] Circle (oop.js, line 16)
No Properties
Circle Prototype
constructor: function()
draw()
Shape Prototype
constructor: function()
move()
Object Prototype
```

When you are going to create a constructor for a child Class. Make sure you call first the constructor of the parent class.

```javascript
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
}

const c = new Circle(1, "blue");
console.log(c);
// in console
[Log] Circle {color: "blue", radius: 1} (oop.js, line 25)
```

### method Overriding

```javascript
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
  //
  // see the method override
  move() {
    console.log("Circle Move");
  }
}

const c = new Circle(1, "blue");
console.log(c);
console.log(c.move());
// in console
[Log] Circle (oop.js, line 29)
color: "blue"
radius: 1
Circle Prototype
constructor: function()
draw()
move()
Shape Prototype
constructor: function()
move()
Object Prototype
[Log] Circle Move (oop.js, line 24)
```

We can access both of them

```javascript
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

// in console
[Log] Circle {color: "blue", radius: 1} (oop.js, line 30)
[Log] move (oop.js, line 7)
[Log] Circle Move (oop.js, line 25)
```

### CHapter 5 - Exercise

```javascript
const _items = new WeakMap();
class Stack {
  constructor() {
    _items.set(this, []); // private
  }
  push(obj) {
    // add obj to the end of the array
    _items.get(this).push(obj);
  }
  pop() {
    if (_items.get(this).length === 0) {
      throw new Error('Stack is empty');
    }
    return _items.get(this).pop();
  }
  peek() {
    if (_items.get(this).length === 0) {
      throw new Error('Stack is empty');
    }
    return _items.get(this)[_items.get(this).length - 1];
  }
  // send this as read only
  get count() {
    return _items.get(this).length;
  }
}

const s = new Stack();
console.log(s);
// in console
[Log] Stack (oop.js, line 29)
No Properties
Stack Prototype
constructor: function()
count
peek()
pop()
push(obj)
Object Prototype
```
