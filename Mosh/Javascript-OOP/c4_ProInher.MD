# Object Oriented Programming JS: Chapter 4 (Prototypical Inheritance)

## Chapter 4: Prototypical Inheritance

```javascript
function Shape() {}
Shape.prototype.duplicate = function () {
    console.log('duplicate');
}


function Circle(radius) {
    this.radius = radius;
}
Circle.prototype.draw = function () {
    console.log('draw');
}

const cercle = new Circle(1);
const forme = new Shape();

console.log(forme);
console.log(cercle);
// in console
[Log] Shape (oop.js, line 17)
No Properties

Shape Prototype

[Log] Circle (oop.js, line 18)

radius: 1

Circle Prototype
```

As we can see, we have created our own prototypical inheritance. We make sure to create an inheritance for each objects.

> In memory, the Object Circle inherit from the root-Object and the object cercle inherit from Circlebased `Circle.prototype`.

We can make shapebased `Shape.prototype` the parent of Circlebased.

```javascript
function Shape() {}
Shape.prototype.duplicate = function() {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

// the implicit relation with Objectbased
// Circle.prototype = Object.create(Object.Prototype)
// we can make it inherit from shapebased
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
  console.log("draw");
};

const cercle = new Circle(1);
const forme = new Shape();

console.log(forme);
console.log(cercle);
// in console firefox and safari
{}

<prototype>: {â€¦}

constructor: function Shape()
duplicate: function duplicate()
<prototype>: Object { â€¦ }
oop.js:23:1
{â€¦}

radius: 1

<prototype>: {â€¦}

draw: function draw()
<prototype>: Object { duplicate: duplicate()
, â€¦ }
oop.js:24:1
> cercle.draw()
[Log] draw (oop.js, line 17)
> cercle.duplicate()
[Log] duplicate (oop.js, line 3)
```

### Resetting the constructor

```javascript
// we comment this line
//Circle.prototype = Object.create(Shape.prototype);
// we can see the equivalence
> new Circle(1)
< Circle {radius: 1, draw: function}
> new Circle.prototype.constructor(1)
< Circle {radius: 1, draw: function}
```

By doing this:`Circle.prototype = Object.create(Shape.prototype);` we resset the prototype of this object. As we can see

```javascript
[Log] Shape {duplicate: function} (oop.js, line 24)
[Log] Shape {radius: 1, draw: function, duplicate: function} (oop.js, line 25)
> new Circle.prototype.constructor(1)
< Shape {duplicate: function}
> new Circle(1)
< Shape {radius: 1, draw: function, duplicate: function}
```

> As best practice

```javascript
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

// console
[Log] Shape {duplicate: function} (oop.js, line 23)
[Log] Circle {radius: 1, draw: function, duplicate: function} (oop.js, line 24)
```

### Calling Super Constructor

Work the actually used the inheritannce

```javascript
function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}


function Circle(radius, color) {
    this.radius = radius;
    Shape(color);
}
// we reset the prototype
Circle.prototype = Object.create(Shape.prototype);
//  we should also reset the constructor
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log('draw');
}

const cercle = new Circle(1, "red");
const forme = new Shape("blue");

console.log(forme);
console.log(cercle);
// in console
[Log] Shape {color: "blue", duplicate: function} (oop.js, line 26)
[Log] Circle {radius: 1, draw: function, duplicate: function} (oop.js, line 27)
```

we didn't get the `red`. Now we must usse another method to access the property form the shape object.

```javascript
function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}


function Circle(radius, color) {
    this.radius = radius;
    // Inherit a property from the call method
    Shape.call(this, color);
}
// we reset the prototype
Circle.prototype = Object.create(Shape.prototype);
//  we should also reset the constructor
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log('draw');
}

const cercle = new Circle(1, "red");
const forme = new Shape("blue");

console.log(forme);
console.log(cercle);
// in console
[Log] Shape {color: "blue", duplicate: function} (oop.js, line 27)
[Log] Circle {radius: 1, color: "red", draw: function, duplicate: function} (oop.js, line 28)
```

### Intermidiate function inheritance

```javascript
function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}


function Circle(radius, color) {
    this.radius = radius;
    // Inherit a property from the call method
    Shape.call(this, color);
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log('draw');
}

// will inherit from shape
function Square(size) {
    this.size = size;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;




const cercle = new Circle(1, "red");
const forme = new Shape("blue");
const carree = new Square(1);

console.log(forme);
console.log(cercle);

// in console
[Log] Shape {color: "blue", duplicate: function} (oop.js, line 38)
[Log] Circle {radius: 1, color: "red", draw: function, duplicate: function} (oop.js, line 39)
> carree
< Square {size: 1, duplicate: function}
```

There is a better way to set the inheritance.

```javascript
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
function Circle(radius, color) {
    this.radius = radius;
    // Inherit a property from the call method
    Shape.call(this, color);
}
Circle.prototype.draw = function () {
    console.log('draw');
}
// child-parent
extend(Circle, Shape);

// CHild
function Square(size) {
    this.size = size;
}
// child-parent
extend(Square, Shape);



const cercle = new Circle(1, "red");
const forme = new Shape("blue");
const carree = new Square(1);

console.log(forme);
console.log(cercle);
console.log(carree);
// in console
[Log] Shape {color: "blue", duplicate: function} (oop.js, line 40)
[Log] Circle {radius: 1, color: "red", duplicate: function} (oop.js, line 41)
[Log] Square {size: 1, duplicate: function} (oop.js, line 42)
```

### Method Overriding

> If we had a situation that we want to change a method or behavior inherit from a parent-object. we call that method overriding.

```javascript
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

// overriding method
// this must absolutely be place after the
// intermediate inheritence function
Circle.prototype.duplicate = function () {
    console.log('I have override this method');
}

const cercle = new Circle(1);
const forme = new Shape("blue");


console.log(forme);
console.log(cercle);
// in console
[Log] Shape {color: "blue", duplicate: function} (oop.js, line 36)
[Log] Circle {radius: 1, duplicate: function} (oop.js, line 37)
> cercle.duplicate()
[Log] I have override this method (oop.js, line 29)
```

We can use another trick

```javascript
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

// in console
[Log] Shape {color: "blue", duplicate: function} (oop.js, line 35)
[Log] Circle {radius: 1, duplicate: function} (oop.js, line 36)
> cercle.duplicate()
[Log] duplicate (oop.js, line 12)
[Log] I have override this method (oop.js, line 28)
```

### Polymorphism

Polymorphism means many form. It's a very powerful technique in oop.

```javascript
// Polymorphism
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
Circle.prototype.duplicate = function () {
    Shape.prototype.duplicate.call(this);
    console.log('I have override this method circle style');
}

//Child
function Square() {}
extend(Square, Shape);

Square.prototype.duplicate = function () {
    Shape.prototype.duplicate.call(this);
    console.log('duplicate for the Square');
}



const sq = new Square();
const cercle = new Circle(1);
const forme = new Shape("blue");


console.log(forme);
console.log(cercle);
console.log(sq);

// polimorphism of the duplicate methode
// between the parent and child

const array = [new Circle(1), new Square];
// this possible because of OOP and polymorphism
for (let s of array) {
    s.duplicate();
}
// In console
[Log] Shape {color: "blue", duplicate: function} (oop.js, line 46)
[Log] Circle {radius: 1, duplicate: function} (oop.js, line 47)
[Log] Square {duplicate: function} (oop.js, line 48)
[Log] duplicate (oop.js, line 13)
[Log] I have override this method circle style (oop.js, line 27)
[Log] duplicate (oop.js, line 13)
[Log] duplicate for the Square (oop.js, line 36)
```

### When to use inheritance

Very practicle for code reuse but you can easily put to much complexity in your code.

Different type of mystake:

- Wrong hierarchy between your parent and child object.
- Can get easily complexe (hierachy)

> **Avoid creating inheritance hierachies** because they are very fragiles. Do not go more than 1 level of inheritance. **Favor composition OVER inheritance**.

### Mixings (COMPOSITION)

```javascript
// Mixing
// we are now defining one feature as an object

const canEat = {
    eat: function () {
        this.hunger--,
            console.log('eating');
    }
};

const canWalk = {
    walk: function () {
        console.log('walk');
    }
};

// we are going to use Object.assign to copy
// properties and methods
// from one object to another object

const Person = Object.assign({}, canEat, canWalk);
console.log(Person);
// in console
[Log] {eat: function, walk: function} (oop.js, line 26)
```

```javascript
// Mixing
// we are now defining one feature as an object

const canEat = {
    eat: function () {
        this.hunger--,
            console.log('eating');
    }
};
const canWalk = {
    walk: function () {
        console.log('walk');
    }
};

// a constructor function to build the Person object
function Person(name) {
    this.name = name;
}
Object.assign(Person.prototype, canEat, canWalk);

//as we see, we point
//directly to the prototype of
// the constructor function
const moun = new Person('Lelex');
console.log(moun);
// in console
[Log] Person {name: "Lelex", eat: function, walk: function} (oop.js, line 26)
```

We use another feature as an object and use another constructor function

```javascript
// Mixing
// we are now defining one feature as an object
const canEat = {
    eat: function () {
        this.hunger--,
            console.log('eating');
    }
};
const canWalk = {
    walk: function () {
        console.log('walk');
    }
};

// Another feature
const canSwim = {
    swim() {
        console.log('swim');
    }
};

// a constructor function to build the Person object
function Person(name) {
    this.name = name;
}
Object.assign(Person.prototype, canEat, canWalk);

// a new constructor

function Goldfish(size) {
    this.size = size;
}
Object.assign(Goldfish.prototype, canEat, canSwim);

// now

const moun = new Person('Lelex');
console.log(moun);
const poisson = new Goldfish(1.2);
console.log(poisson);
// in console
[Log] Person {name: "Lelex", eat: function, walk: function} (oop.js, line 38)
[Log] Goldfish {size: 1.2, eat: function, swim: function} (oop.js, line 40)
```

We can now create a function called mixing to make the code more readable.

```javascript
// Mixing function
function mixing(target, ...sources) {
    // ...sources is an array of argument
    // rest operator
    Object.assign(target, ...sources);
    // now ...sources is the spread operator
    // it will spread the element of the array
}
// we are now defining one feature as an object
const canEat = {
    eat: function () {
        this.hunger--,
            console.log('eating');
    }
};
const canWalk = {
    walk: function () {
        console.log('walk');
    }
};

// Another feature
const canSwim = {
    swim() {
        console.log('swim');
    }
};

// a constructor function to build the Person object
function Person(name) {
    this.name = name;
}
mixing(Person.prototype, canEat, canWalk);

// a new constructor

function Goldfish(size) {
    this.size = size;
}
mixing(Goldfish.prototype, canEat, canSwim);

// now

const moun = new Person('Lelex');
console.log(moun);
const poisson = new Goldfish(1.2);
console.log(poisson);
// in console
[Log] Person {name: "Lelex", eat: function, walk: function} (oop.js, line 45)
[Log] Goldfish {size: 1.2, eat: function, swim: function} (oop.js, line 47)
```

### Exercise - Chapter 4

1. Exercise on prototypical inheritance

```javascript
// html element object
// parent
function HtmlElement() {
    this.click = function () {
        console.log("click");
    };
}
HtmlElement.prototype.focus = function () {
    console.log('focus');
}

// html select object
// Child
function HtmlSelect(items = []) {
    this.items = items;
    this.addItems = function (item) {
        this.items.push(item);
    }
    this.removeItems = function (item) {
        this.items.splice(this.items.indexof(item), 1);
    }
}

// normally we would do this
HtmlSelect.prototype = Object.create(HtmlElement.prototype);
HtmlSelect.prototype.constructor = HtmlSelect;


// with this implementation we will not inherit the
// click method from the parent object

const h = new HtmlElement();
const s = new HtmlSelect();

console.log(h); // parent
console.log(s); // child
// in console
[Log] HtmlElement {click: function, focus: function} (oop.js, line 34)
[Log] HtmlSelect {items: [], addItems: function, removeItems: function, focus: function} (oop.js, line 35)
```

```javascript
// html element object
// parent
function HtmlElement() {
    this.click = function () {
        console.log("click");
    };
}
HtmlElement.prototype.focus = function () {
    console.log('focus');
}

// html select object
// Child
function HtmlSelect(items = []) {
    this.items = items;
    this.addItems = function (item) {
        this.items.push(item);
    }
    this.removeItems = function (item) {
        this.items.splice(this.items.indexof(item), 1);
    }
}

// normally we would do this
// because we know with this method
// we won't inherit the click method
// HtmlSelect.prototype = Object.create(HtmlElement.prototype);

HtmlSelect.prototype = new HtmlElement();
// reset the constructor
HtmlSelect.prototype.constructor = HtmlSelect;




const h = new HtmlElement();
const s = new HtmlSelect();

console.log(h); // parent
console.log(s); // child
// in console
[Log] HtmlElement {click: function, focus: function} (oop.js, line 39)
[Log] HtmlSelect {items: [], addItems: function, removeItems: function, click: function, â€¦} (oop.js, line 40)
```

2. Exercise on Polymorphism

```javascript
// html element object
// parent
function HtmlElement() {
    this.click = function () {
        console.log("click");
    };
}
HtmlElement.prototype.focus = function () {
    console.log('focus');
}


// html select object
// Child
function HtmlSelect(items = []) {
    this.items = items;
    this.addItems = function (item) {
        this.items.push(item);
    }
    this.removeItems = function (item) {
        this.items.splice(this.items.indexof(item), 1);
    }
    this.render = function () {
        return `
        <select>${this.items.map(item=>`
        <option>${item}</option>`).join('')}</select>`;
    }
}
HtmlSelect.prototype = new HtmlElement();
HtmlSelect.prototype.constructor = HtmlSelect;

// Html image element object
// child of html element
function HtmlImageElement(src) {
    this.src = src;
    this.render = function () {
        // template literal allow us to pass argument
        // in a string
        return `<img src="${this.src}"/>`
    }
}
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;



const h = new HtmlElement();
const s = new HtmlSelect();
const hims = new HtmlImageElement();


console.log(h); // parent
console.log(s); // child
console.log(hims); // child

// in console
[Log] HtmlElement {click: function, focus: function} (oop.js, line 52)
[Log] HtmlSelect {items: [], addItems: function, removeItems: function, render: function, click: function, â€¦} (oop.js, line 53)
[Log] HtmlImageElement {src: undefined, render: function, click: function, focus: function} (oop.js, line 54)
```
