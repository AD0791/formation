---
output:
  html_document: default
  pdf_document: default
  word_document: default
---
# Object Oriented Programming: Javascript

---

# Chapter 1: Getting Started

## What's OOP

> OOP is a programming paradigm (style of programming) centered around objects rather than functions. OOP is not a programming language or a tool.

Languages that support OOP:

- C/C++
- C#
- Java
- Ruby
- Python
- Javascript
- R, PHP, ...

The (popular) frameworks are designed with OOP concepts (for example Angular).

## 4 Pillars of OOP

1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism

> Before OOP we had uniquely procedural programming (functional programming). It's a straight forward style programming where you are only using functions on the variables (the data).

**RIsk Of Spaghetti codes: To much interdependancy between the functions. That's where OOP solved the problem. In OOP, we group the related functions and variables into a unit called object. We refer to these variables as properties and the functions as methods.**

1.  Encapsulation

> Encapsulation is the fact that we regroup the related funcions and variables into a unit called Object. In this object, the variables are refered as properties and the the functions as methods.

```javascript
// procedural programming
let baseSalary = 4600;
let overtime = 4;
let rate = 0;

function getwage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}
// you would do
getwage();

// object oriented programming
// we create the object employeeMPCE
let employeeMPCE = {
  baseSalary: 4600,
  overtime: 4,
  rate: 0,
  getwage: function() {
    return console.log(this.baseSalary + this.overtime * this.rate);
  }
};
employeeMPCE.getwage(); //method
console.log(employeeMPCE.baseSalary); // property
// the fewer parameters a function has, the easier it is to maintain that function.
```

2. Abstraction

> It's when you can hide some of the properties and methods from the outside. This gives us a couple of benefits:

- make the interface simpler **(an object with few properties and methods is easier then an object with several properties and methods)**
- reduce the impact of change.

3. Inheritance

> **It's a mecanism that allow you to eliminate redundant code.**

Let's take an example from html. Sandbox, textbox and checkbox, these 3 elements have properties like hidden, innerHTML and methods like click and focus. Instead of redifining all the properties and methods for each of these html elements, we can **create a generic object call htmlelement, and have other objects inherit his properties and methods**

It looks like parent-child in css.

4. Polymorphism (many forms)

> **Polymorphism is a technique that allows you to eliminate long if and else or switch and case statements.** For example if you have 3 html objects that you want to render. With the procedural programming we would have to use long conditional statements (if and else or switch and case). But with OOP, we can define a render method for each of these objects. And each of them would behave differently depending on the type of these objects.

Benefits of OOP:

- encapsulation = reduce complexity + increase reusability
- abstraction = reduce complexity + isolate impact of change
- inheritance = eliminate redundant code
- polymorphism = refactor ugly switch and case (conditional statements) statements

## Course Structure

- Objects
- Prototypes
- Prototypical Inheritance
- ES6 Classes
- Modules

# CHapter 2: Objects

## Objects literal

> An object in javascript is a collection of key value pairs.

```javascript
// object Literal
let employeeMPCE = {
  baseSalary: 4600,
  overtime: 4,
  rate: 0,
  getwage: function() {
    return console.log(this.baseSalary + this.overtime * this.rate);
  }
};
employeeMPCE.getwage();
console.log(employeeMPCE.baseSalary);
///////////////// or
let circle = {
  radius: 1,
  location: {
    x: 1,
    y: 2
  },
  draw: function() {
    console.log("draw");
  }
};
// dot notation
circle.draw();
// bracket notation
circle["draw"];
// draw is a method
// location and radius are properties
// properties (variables) are used to hold values.
// A method (function) is used to define some logic.
```

Object literal is a simple way to define an object. But **we can also define an object with factories and constructors**.

## Factories and constructors (property)

> With object literal, if we want to create a new similar object you would have to duplicate the object. It's not a good practice to do so. If an object have more then one method we shouldn't duplicate them. (Now when an object have more then one method, it is said that this object has a behavior). The object literal way is very limited.

**Duplicating an object is a problem if the object has behavior.**

To solve the problem we can used a **factory function**:

```javascript
// factory function
function dcircle(radius, x, y) {
  return {
    radius,
    x,
    y,
    draw: function() {
      console.log("factory");
    }
  };
}
// Now in Javascript, when creating a factory function,
// the properties can be use as parameters

const circle = dcircle(1, 1, 1); // we create (by use) the object

circle.draw(); // access the function (since the function is log)
console.log(circle.radius); // access the value
```

The other option is to create a **constructor function**:

> The naming convention of an constructors is different. We must start with an uppercase letter at the beginning. The constructor method looks like your are creating an instance of a classe. In Javascript we don't have the concept of classes.

```javascript
// factory function
function dcircle(radius, x, y) {
  return {
    radius,
    x,
    y,
    draw: function() {
      console.log("factory");
    }
  };
}
// Now in Javascript, when creating a factory function,
// the properties can be use as an parameters

const circle = dcircle(1, 1, 1); // we create (by use) the object

circle.draw(); // access the function (since the function is log)
console.log(circle.radius); // access the value
//////////////////////

//constructors

function Cercle(r, u, t) {
  // console.log("this", this) // reference the global object
  this.r = r; // this : the reference executing the code
  this.u = u; // this : indicate an empty object in memory
  this.t = t; // This : set the properties and methods
  this.trace = function() {
    console.log("Constructors");
  };
}
const autre = new Cercle(2, 2, 2);
autre.trace();
console.log(autre.u);
// the new operator
// will create under the hood an empty object. It will set
// "this." to point to that object.
// if we remove the new, it will return the window object
// depending of the browser. bad practice.
// global object in browser is call window-object.
// global object in node is call global .
```

Constructor property

> Every object in js has a property called constructor and that references the function that was used to create that object. When we create an object with the object literal syntax internally the javascript engine uses the build-in constructor function.

```javascript
> Cercle.constructor // log this
< function Function() {
    [native code]
}
// That Function() is a build-in constructor in the javascript engine.
////////////
new String(); // vs the string literal : "", ''
new Boolean(); // vs the boolean literal : true, false
new Number(); // vs the Number literal : 1, 2, 3, ...
// it's cleaner (good practice) to use those literals than their object equivalant.
```

## Functions are objects

```javascript
function Cercle(r,u,t){
    this.r = r;
    this.u = u;
    this.t = t;
    this.trace = function(){
        console.log("Constructors");
    }
}
const autre  =  new Cercle(2,2,2);
autre.trace();
console.log(autre.u);
// the Cercle function has method and properties
// in the console of our browser we will see it better
> Cercle.constructor
< function Function() {
    [native code]
}
// proof that a function has a constructor property
// function is an object in javascript
// We can use the FUnction constructor to build a new object
const autre1 =  new Function('r','u','t',`
this.r = r;
this.u = u;
this.t = t;
this.trace = function(){
    console.log("Constructors");
}
`)
const slik = new autre1(1,1,1);
// another tricks
 // autre.call({},1,1,1)
// is exactly like doing new autre1(1,1,1)
// call is the method of  this function autre1
// autre.apply({},[1,1,1])
// is the same as slik and slik1
// apply is another method of the function
// `` is use to make multiple line strings
// we use the built in Function constructor to create
// the function autre1
// in console
> slik
< anonymous {r: 1, u: 1, t: 1, trace: function}
```

## Value VS reference types

Primitives or value types:

- Number
- String
- Boolean
- Symbol
- Undefined
- Null

Reference types:

- Object
- Function
- Array

We see that array and function are technically objects. We will see how primitives and reference types (objects) behave differently.

```javascript
let x = 100;
let y = x; // copy
x=200;
// in the console
> x
< 200
> y
< 100
// the value of y is independent form the new assignment of x.

// Other case let's change x to an object literal
let x ={value:100};
let y = x; // copy is different
x.value = 200;
// Now the value of y will also change.
// in the console
> x
< {value: 200}
> y
< {value: 200}
```

> When we use an object. That object is not stored in this variable. That object is stored somewhere else in the memory. And the address of that memory location is stored inside that variable. So then when we copy x into y, it's the address or the reference that is copied. In other word both x and y are pointing the same object in memory. Then when we modify that object using x or y. It changes our immidiatly visible to the other variable.

Conslusion:

- Primitives are copied by their value.
- Objects are copied by their reference.

```javascript
let n  = 10;
function inc(n){
    n++; // increment -> n = n+1
    return console.log(n);
}
inc(n); // 11
console.log(n); // 10
// in to the console the ouput is 11 and the other 10.
// the variable defined outside the function is
// independent from the parameter of that function
// increment will not make effect on the n define //out off the scope of the function.
/////////////////////////////////////////////

// Now let's create an object literal
let o  = {value:10};
function inc(o){
    o.value++; // increment -> n = n+1
    return console.log(o);
}
inc(o);
console.log(o);
// in the console
[Log] {value: 11} (index.js, line 4)
[Log] {value: 11} (index.js, line 7)
```

## Adding and removing Properties

> Objects in javascript are dynamic. That's mean after you create them, you can add or delete properties.

Add property

```javascript
function Cercle(r,u,t){
    this.r = r;
    this.u = u;
    this.t = t;
    this.trace = function(){
        console.log("Constructors");
    }
}
const autre  =  new Cercle(2,2,2);
autre.trace();
console.log(autre.u);
 // add properties in Javascript is easy
 // we don't have classes in JS
 autre.diam = {m:4};
 // in the console
> autre
< Cercle {r: 2, u: 2, t: 2, trace: function, diam: {m: 4}}
```

> you can use the bracket notation instead of the the dot notation. Also in the case that the property name isn't a valid identifier.

[Valid Identifiers](https://developer.mozilla.org/en-US/docs/Glossary/Identifier)

```javascript
"centre location";
// centre location is not a valid identifier. Same as Centre-location.
// you can't use the dot notation on either one of them.
autre["centre location"];
```

Delete property

```javascript
// delete a property
delete autre.diam; // or with bracket notation
//In the console
> autre
< Cercle {r: 2, u: 2, t: 2, trace: function}
// the property diam is delete.
```

> When you are dynamicly adding or removing a property of an object. It is good practice to it with the bracket notation.

```javascript
const pname = "centre location";
// autre[pname] = {key:value};
```

## Enumerating properties

We will a for loop to extract the methods and the properties.

```javascript
function Cercle(r, u, t) {
  this.r = r;
  this.u = u;
  this.t = t;
  this.trace = function() {
    console.log("Constructors");
  };
}
const autre = new Cercle(2, 2, 2);
autre.trace();
console.log(autre.u);

for (let key in autre) {
  console.log(key, autre[key]);
}
// output the keys and their values
/////////

// return the methods only:
for (let key in autre) {
  if (typeof autre[key] !== "function") {
    console.log(key, autre[key]);
  }
}
//another method is to use directly
//the Object built-in function-object.
console.log(Object.keys(autre));

//check if a key is in an object.
if ("r" in autre) {
  console.log(true);
}
```

## Abstraction

> Hide the details and show the essentials.

```javascript
// everything is accessible
function Cercle(radius) {
  this.radius = radius;
  this.dloc = { x: 0, y: 0 };
  this.comoploc = function() {
    // ...
  };
  this.trace = function() {
    this.comoploc();
    console.log("Constructors");
  };
}
const autre = new Cercle(2);
autre.trace();
console.log(autre.radius);
```

Private properties, methods, getters and setters:

> this.a = a set a as property. but you can define it as a local variable to hide it in the constructor function.

```javascript
function Cercle(radius) {
  this.radius = radius;
  let dloc = { x: 0, y: 0 }; // private property
  this.trace = function() {
    console.log("Constructors");
  };
  Object.defineProperty(this, "dloc", {
    get: function() {
      return dloc;
    }, //
    set: function(value) {
      if (!value.x || !value.y) {
        throw new Error("invalid location");
      }
      dloc = value;
    }
  }); // private but can be dispay
}
const autre = new Cercle(2);
autre.trace();
console.log(autre.radius);
console.log(autre.dloc); // we are accessing this private
// private property with this getter
autre.dloc = 1; // we access and set the value externally
// with the setters
```

A getter is a function that we use to get a property (read-only property). A setter is a function that will allow us to set a property form the outside.

# Chapter 1-Exercises

1.  Make a stop watch

- gives the duration as a property
- start is a method
- stop is a method
- can't start twice
- after sop continue the initail count
- reset method will restart the watch at 0
- initial state is 0

```javascript
// watch object - constructor function
function watch() {
  // private properties
  // for implementation details
  let startime = 0;
  let endtime = 0;
  let runtime = false; // 0
  // wil be display on the screen
  let duration = 0;
  // we need 3 button
  this.start = function() {
    if (runtime) {
      throw new Error("is running");
    }
    // we change the runtime state so the error
    // will be catch
    runtime = true; // true means 1
    startime = new Date(); // time object
  };
  this.stop = function() {
    if (!runtime) {
      throw new Error("not running");
    } ///// the calculus logic
    runtime = false;
    // the state of the run is changed so the error
    // will be catch
    endtime = new Date(); //time object
    // Date() object has getTime() method
    // getTime() return time in millisecondes without a comma
    const sec = (endtime.getTime() - startime.getTime()) / 1000;
    duration += sec;
  };
  this.reset = function() {
    startime = 0;
    endtime = 0;
    runtime = false;
    duration = 0;
  };
  Object.defineProperty(this, "duration", {
    // a getter to expose duration
    get: function() {
      return duration;
    }
  });
}

const stopwatch = new watch();
// you will do the action in the console
// The key here is the Date() function-object
// and the implementation of the calculus
// endtime et startime  = new Date()
```

# Chapter 2: Prototypes

## Inheritance (prototypical,multilevel)

> Inheritance is one of the 4 core concept of object oriented programming that enable an object to take on the properties and the methods of another object.

It makes it easy to reuse codes in different part of an application.

Classical Relation of Inheritance :

- base/super/parent = is-a = derived/sub/child

In javascript we don't have classes. We only have objects. In this case, talking about inheritance, the proper concept is prototypical inheritance.

Prototypical Relation of Inheritance:

- Parent Object = is-a = Child object

> Almost every object in javascript have a prototype or parent.

```javascript
let x = {};
// this object x has a prototype called "Object".
//
// In console we can see
> x
< {}
> Object.prototype
< {}
> Object.getPrototypeOf(x)
< {}
//
//
let x = {};
let y = {};
// x and y have the same prototype
> Object.getPrototypeOf(x) == Object.getPrototypeOf(y)
< true
```

Every object that we create in javascript. Directly or indirectly inherit from "Object". Object is the root of all objects in javascript. And it doesn't have a prototype or parent.

When we are looking for property or a method in an object. Javascript will look for these in the protoype of that object (most probably Object).

> Javascript will walks up the prototype chain to find the target member.

Multilevel of Inheritance

```javascript
let myarray = [];
// myarray derives from the prototype="Array"
// prototype="Array" derives from Object
```

> object created by a given constructor will have the same prototype.

## Property Descriptors

```javascript
let person = {name: "Alexandro"};
console.log(Object.keys(person));
// in console
[Log] ["name"] (1) (oop.js, line 2)
// but the toLocaleString method is not available to
// us inside the editor. We can't access the property
// defined in Object-based.
> person.toLocaleString()
< "[object Object]"
```

> IN javascript, ou properties have attributes attach to them. It prevent a property of being enumerated.

```javascript
let person = {name: "Alexandro"};
let obas = Object.getPrototypeOf(person);
let desc = Object.getOwnPropertyDescriptor(obas,'toString');
console.log(desc);
// In console
[Log] {value: function, writable: true, enumerable: false, configurable: true} (oop.js, line 4)
// we see that this method is not enumerable.
```

And the previous chapter we used `Object.defineProperty()` to define the attributes getters and setters. Now as we can see, we can define more attributes.

```javascript
// Writable = false (object is readonly)
let person = {name: "Alexandro"};
Object.defineProperty(person,'name',{
    writable:false
});

person.name = 'Lelex';
console.log(person);
// console
// the name didn't changed
[Log] {name: "Alexandro"} (oop.js, line 7)
///////
// read-only and we will hide the keys
let person = {name: "Alexandro"};
Object.defineProperty(person,'name',{
    writable:false,
    enumerable:false
});

person.name = 'Lelex';
console.log(Object.keys(person));
// in console
// the keys won't be display
[Log] [] (0) (oop.js, line 8)
//////
// read-only, hiding keys and unconfigurable
let person = {name: "Alexandro"};
Object.defineProperty(person,'name',{
    writable:false,
    enumerable:false,
    configurable: false
});

delete person.name;
console.log(person);
// in console
// the name won't be deleted
[Log] {name: "Alexandro"} (oop.js, line 9)
```

> By default all those attribute are truth which means all property are writable, enumerable and configurable.

## Constructor Property

Constructor also have a prototype property.

```javascript
function Cercle(radius){
    this.radius = radius;
}

const circle = new Cercle(1);

console.log(Cercle.prototype);
// console
[Log] Cercle {} (oop.js, line 7)
// {} is the prototype of the cercle constructor
// Object do the same
> Object.prototype
< {}
```

```javascript
let array = [];
console.log(array.prototype);
// you will see that
> Array.prototype
< [] (0)
// Array and array has the same prototype.
```

> object in javascript can have the same constructor prototype.

## Prototype vs Instance member

If you have a copies of the same object.
With the same methods and properties, you're going to waste your computer memory.

The javascript engine will check the prpoerties and methods of an objects or the prototype of that object to find the require property or method, we are asking for.

We handle that by looking for the prototype of that object, to store some properties or methods.

```javascript
function Cercle(radius){
    this.radius = radius;
}

// let's put the draw method on the prototype of the
// Cerccle object.
Cercle.prototype.draw = function(){
    console.log('draw');
};

const c1 = new Cercle(1);
const c2  = new Cercle(2);
// in console
Cercle = $1
radius: 1
Cercle Prototype
constructor: function(radius)
draw()
Object Prototype
```

The draw method is now on the Cercle prototype. And we can access it because of the prototypycal inheritance.

```javascript
function Cercle(radius){
    // instance members
    this.radius = radius;
}
// let's put the draw method on the prototype of the
// Cerccle object.
// prototype members
Cercle.prototype.draw = function(){
    console.log('draw');
};

const c1 = new Cercle(1);
const c2  = new Cercle(2);

// let's access the draw method

c1.draw();
// in console
[Log] draw (oop.js, line 8)
```

We have two kind of properties and methods in javascript.

- Instance (property and method) members.
- Prototype (property and method) members.

`c1.toString()` will output the object and the prototype of that object: `"[object Object]"`. c1 as an instance of Cercle object inherit this method from the prototype Object. We can oeverride this methode like this.

```javascript
function Cercle(radius) {
  this.radius = radius;
}

// let's put the draw method on the prototype of the
// Cercle object.
Cercle.prototype.draw = function() {
  console.log("draw");
};

const c1 = new Cercle(1);
const c2 = new Cercle(2);

// let's access the draw method

Cercle.prototype.toString =
  function() {
    return "Cercle with the radius " + this.radius;
  } >
  // in console
  c1.toString() <
  "Cercle with the radius 1";
```

So `Cercle.prototype` is a way for us to modify the prototype as we see fit.

We can easily reference a property or method (instance member) in our protoype method (prototype member). We use this prototype method to add function in the prototype of that Cercle object.

```javascript
function Cercle(radius){
    this.radius = radius;
    this.move = function(){
        console.log('Move like a beast');
    }
}

// let's put the draw method on the prototype of the
// Cercle object.
Cercle.prototype.draw = function(){
    this.move();
    console.log('draw');
};

const c1 = new Cercle(1);
const c2  = new Cercle(2);

// // let's access the draw method
c1.draw();
// Cercle.prototype.toString = function(){
//     return "Cercle with the radius "+ this.radius;
// }
// in console
[Log] Move like a beast (oop.js, line 4)
[Log] draw (oop.js, line 12)
```

We can also reference a protoype member in an instance member.

```javascript
function Cercle(radius){
    this.radius = radius;
    this.move = function(){
        this.draw();
        console.log('Move like a beast');
    }
}

// let's put the draw method on the prototype of the
// Cercle object.
Cercle.prototype.draw = function(){
    // this.move();
    console.log('draw');
};

const c1 = new Cercle(1);
const c2  = new Cercle(2);

c1.move();
// Cercle.prototype.toString = function(){
//     return "Cercle with the radius "+ this.radius;
// }
// in console
[Log] draw (oop.js, line 13)
[Log] Move like a beast (oop.js, line 5)
```

### Iterating instance and prototype members

```javascript
function Cercle(radius){
    // instance members
    this.radius = radius;
    this.move = function(){
        console.log('Move like a beast');
    }
}

// you can create an object first
// than define a prototype
const c1 = new Cercle(1);


//prototypes members
Cercle.prototype.draw = function(){
    console.log('draw');
};

c1.draw();
// in console
[Log] draw (oop.js, line 16)
```

Iterate instance over prototype members:

`console.log(Object.keys(c1));` only return instance members: `[Log] ["radius", "move"] (2) (oop.js, line 19)`.

But the `for(let k in c1){console.log(k)};` will return the instance and the prototype members.

> In javascript, they use the word own instead of instance. **Own members vs prototype member**.

```javascript
// in console
// draw is a prototype method
> c1.hasOwnProperty('draw')
< false
> c1.hasOwnProperty('move')
< true
> c1.hasOwnProperty('radius')
< true
```

## Avoid Extending the built-in Objects

> Don't modify objects you don't own. Don't override methods and properties. Don't add new methods and properties in the built-in objects. Don't remove existing properties and methods. To avoid create all sort of issues.

- libraries dependencies can be compromised.
- ended up with the same named method or property with differant implementation.
- debugging issue
- etc.

# Chapter 2 - Exercises

> You should put property or method in the prototype as an optimization technique. Your object must always be on a valid state. The big picture, sometimes when you want to optimize your code. You are going to create issues in the process of doing so.

```javascript
// watch object - constructor function
function watch() {
  // we most expose these private properties
  // as read-only.
  let startime = 0;
  let endtime = 0;
  let runtime = false;
  let duration = 0;
  // getter to expose the duration property as readonly.
  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    },
    // this implementation has a weakness
    // we can simply modify externally the value
    // of the duration
    set: function(value) {
      duration = value;
    }
  });
  // getter to expose the 3 other privates properties
  // as readonly.
  Object.defineProperty(this, "startime", {
    get: function() {
      return startime;
    }
  });
  Object.defineProperty(this, "endtime", {
    get: function() {
      return endtime;
    }
  });
  Object.defineProperty(this, "runtime", {
    get: function() {
      return runtime;
    }
  });
}

watch.prototype.start = function() {
  if (this.runtime) {
    throw new Error("is running");
  }
  this.runtime = true;
  this.startime = new Date();
};
watch.prototype.stop = function() {
  if (!this.runtime) {
    throw new Error("not running");
  }
  this.runtime = false;
  this.endtime = new Date();
  const sec = (this.endtime.getTime() - this.startime.getTime()) / 1000;
  // in order to record the duration, we had to use
  // a setter.
  this.duration += sec;
};
watch.prototype.reset = function() {
  this.startime = 0;
  this.endtime = 0;
  this.runtime = false;
  this.duration = 0;
};

const stopwatch = new watch();
```

It was a bad idea to do this implementation for this object. It brokes the abstraction principle. Premature optimization is the root of all evils.

# Chapter 3: Prototypical Inheritance

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

<prototype>: {…}

constructor: function Shape()
duplicate: function duplicate()
<prototype>: Object { … }
oop.js:23:1
{…}

radius: 1

<prototype>: {…}

draw: function draw()
<prototype>: Object { duplicate: duplicate()
, … }
oop.js:24:1
> cercle.draw()
[Log] draw (oop.js, line 17)
> cercle.duplicate()
[Log] duplicate (oop.js, line 3)
```

## Resetting the constructor

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

## Calling Super Constructor

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

## Intermidiate function inheritance

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

## Method Overriding

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

## Polymorphism

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

## When to use inheritance

Very practicle for code reuse but you can easily put to much complexity in your code.

Different type of mystake:

- Wrong hierarchy between your parent and child object.
- Can get easily complexe (hierachy)

> **Avoid creating inheritance hierachies** because they are very fragiles. Do not go more than 1 level of inheritance. **Favor composition OVER inheritance**.

## Mixings (COMPOSITION)

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

# Exercise - Chapter 3

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
[Log] HtmlSelect {items: [], addItems: function, removeItems: function, click: function, …} (oop.js, line 40)
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
[Log] HtmlSelect {items: [], addItems: function, removeItems: function, render: function, click: function, …} (oop.js, line 53)
[Log] HtmlImageElement {src: undefined, render: function, click: function, focus: function} (oop.js, line 54)
```

# Chapter 4 : ES6 Classes

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

## Hoisting

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

## Static Method

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

## The this keyword

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
[Log] Window {document: #document, NaN: NaN, window: Window, Infinity: Infinity, undefined: undefined, …} (oop.js, line 3)
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

## Private Members

Abstraction means hiding the details and the complexity in order to show the essentials.

### Using Symbols

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

### Using WeakMaps

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

## getters and setters

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

## Inheritance

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

## method Overriding

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

# CHapter 5 - Exercise

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

# Chapter 6 - Tooling

The benefits of using modularity:

- Maintainability
- Reusability
- Abstract

The modules system from ES5 to ES6:

1. ES5

- AMD -> Browser
- **CommonJS -> Node.js**
- UMD -> Browser/Node.js

2. ES6

- **ES6 native Modules -> Browsers**

## CommonJS

We have this oop.js that we have run on node

```javascript
const _radius = new WeakMap();
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  draw() {
    console.log(`Circle with the radius of ${_radius.get(this)}`);
  }
}
const s = new Circle(10);
console.log(s);
console.log(s.draw());
```

```bash
$ node oop.js
Circle {}
Circle with the radius of 10
undefined
```

> Basic rule for modularity: Things that are highly related should go together (cohesion).

Everything who is build in a module is considered to be private. Unless we explicitly export it.

```javascript
//////oop.js
const Circle = require("./easy");

const s = new Circle(10);
console.log(s);
console.log(s.draw());

//////easy.js
// implementation details
const _radius = new WeakMap();

//  public Interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  draw() {
    console.log(`Circle with the radius of ${_radius.get(this)}`);
  }
}

// why because we only have one Class
module.exports = Circle;
```

```bash
$ node oop.js
Circle {}
Circle with the radius of 10
undefined
```

## ES6 Modules

```javascript
// OOP.js
import { Circle } from "./easy.js";

const s = new Circle(10);
console.log(s);
console.log(s.draw());

// an error console
// [Error] SyntaxError: Unexpected token '{'. import call expects exactly one argument.
//	(anonymous function) (oop.js:1)

// without webpack, we will do a quick fix.
// in oop.html and oop.js

////////////////////////////////////

// easy.js
// implementation details
const _radius = new WeakMap();

//  public Interface
export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  draw() {
    console.log(`Circle with the radius of ${_radius.get(this)}`);
  }
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <h1>Object Oriented Programming</h1>
    <!-- a quick fix to oop.js -->
    <script type="module" src="oop.js"></script>
  </body>
</html>
```

```javascript
// in console
[Log] Circle {} (oop.js, line 6)
[Log] Circle with the radius of 10 (easy.js, line 10)
[Log] undefined (oop.js, line 7)
```

## ES6 Tooling

These tools are relevant for browser application.

- transpiler: translator and compiler. It will convert our modern javascript code to a code that all browser will understand. (like babel)!
- bundler: it's responsible to convert all our javascript files (modules) into a single javascript file. (Which we call a bundle). (like Webpack)!

### Babel

`
We need to install nodejs.

```bash
## Make an new directory
$ cd new dirname
## init a node project
$ npm init -y
# It create a package.json file
```

`package.json` is an indification for an application.

```bash
# i had to do sudo to make it work
npm i babel-cli babel-core babel-preset-env --save-dev
```

- babel-cli: it's babel command line interface that will compile our javascript code.
- babel-core: is the core of babel where the transpiling code is implemented.
- babel-preset-env: In javascript every new feature in es6, we have a plugging for that. This preset is a combination of all these pluggings.
- `--save-dev` means we are going to save them as development dependencies. They are not going to be part of the application. They are not going to be deploy for production.

Now we have the node_modules folder where the packagees have been installed.

Now we can add a file.

```javascript
// we are going to use the babel transpiler
// to convert es.js to a <<format>> that all 
// browser will understand
const x = 1;
```

we head to the ```package.json``` to get some changes. And define a new main and script.

```json
{
  "name": "es6-tooling",
  "version": "1.0.0",
  "description": "",
  "main": "es.js",
  "scripts": {
    "babel": "babel --presets env es.js -o build/alles.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3",
    "babel-preset-env": "^1.7.0"
  }
}
```

now we go to the terminal, we can run the transpiler with npm.

``` bash
$ npm run babel

> es6-tooling@1.0.0 babel /Users/alexandrodisla/Desktop/repo/formation/Mosh/Javascript-OOP/es6-tooling
> babel --presets env es.js -o build/alles.js

Alexandros-MacBook-Pro:es6-tooling alexandrodisla$ 
```

In the build folder we now have transpile our original ```es.js``` file to a new ```alles.js``` that all browser will understand.

```javascript
// babel transpiler work.
"use strict";

var x = 1;
```

> Remember wepback is going to help us create a bundle with our javascript file.

### Webpack

we are going to the webpack folder to set 3 files that we need.

> N.B: with npm when we want to install a package on the node itself we use the ```-g``` command. to install the package globaly.

```bash
# we will install webpack globaly.
webpack init
```

you will answer the questions to set the needed install.

```bash
# start webpack
Alexandros-MacBook-Pro:Webpack alexandrodisla$ webpack-cli init
The command moved into a separate package: @webpack-cli/init
Would you like to install init? (That will run npm install -g @webpack-cli/init) (yes/NO) : yes
npm WARN deprecated kleur@2.0.2: Please upgrade to kleur@3 or migrate to 'ansi-colors' if you prefer the old syntax. Visit <https://github.com/lukeed/kleur/releases/tag/v3.0.0\> for migration path(s).
npm WARN deprecated nomnom@1.8.1: Package no longer supported. Contact support@npmjs.com for more info.
npm WARN deprecated babel-preset-es2015@6.24.1: 🙌  Thanks for using Babel: we recommend using babel-preset-env now: please read babeljs.io/env to update!

> fsevents@1.2.7 install /usr/local/lib/node_modules/@webpack-cli/init/node_modules/fsevents
> node install

node-pre-gyp WARN Using request for node-pre-gyp https download
[fsevents] Success: "/usr/local/lib/node_modules/@webpack-cli/init/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" is installed via remote
npm WARN acorn-dynamic-import@4.0.0 requires a peer of acorn@^6.0.0 but none is installed. You must install peer dependencies yourself.

+ @webpack-cli/init@0.1.5
added 1298 packages from 619 contributors in 178.297s

ℹ INFO For more information and a detailed description of each question, have a look at https://github.com/webpack/webpack-cli/blob/master/INIT.md
ℹ INFO Alternatively, run `webpack(-cli) --help` for usage info.

? Will your application have multiple bundles? No
? Which module will be the first to enter the application? [default: ./src/index] ./src/index
? Which folder will your generated bundles be in? [default: dist]: # we use the default here
? Will you be using ES2015? Yes
? Will you use one of the below CSS solutions? No

> fsevents@1.2.7 install /Users/alexandrodisla/Desktop/repo/formation/Mosh/Javascript-OOP/Webpack/node_modules/fsevents
> node install

node-pre-gyp WARN Using needle for node-pre-gyp https download 
[fsevents] Success: "/Users/alexandrodisla/Desktop/repo/formation/Mosh/Javascript-OOP/Webpack/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" is installed via remote
npm WARN saveError ENOENT: no such file or directory, open '/Users/alexandrodisla/Desktop/repo/formation/Mosh/Javascript-OOP/Webpack/package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open '/Users/alexandrodisla/Desktop/repo/formation/Mosh/Javascript-OOP/Webpack/package.json'
npm WARN Webpack No description
npm WARN Webpack No repository field.
npm WARN Webpack No README data
npm WARN Webpack No license field.

+ webpack-cli@3.3.0
+ babel-loader@8.0.5
+ @babel/core@7.3.4
+ babel-plugin-syntax-dynamic-import@6.18.0
+ @babel/preset-env@7.3.4
+ webpack@4.29.6
+ uglifyjs-webpack-plugin@2.1.2
added 576 packages from 262 contributors and audited 6878 packages in 51.652s
found 0 vulnerabilities


Congratulations! Your new webpack configuration file has been created!
{ parser: "babylon" } is deprecated; we now treat it as { parser: "babel" }.

# we need a package.json
Alexandros-MacBook-Pro:Webpack alexandrodisla$ npm init -y
Wrote to /Users/alexandrodisla/Desktop/repo/formation/Mosh/Javascript-OOP/Webpack/package.json:

{
  "name": "Webpack",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "dependencies": {
    "babel-plugin-syntax-dynamic-import": "^6.18.0",
    "babel-loader": "^8.0.5",
    "uglifyjs-webpack-plugin": "^2.1.2",
    "webpack-cli": "^3.3.0",
    "webpack": "^4.29.6"
  },
  "devDependencies": {},
  "scripts": {
    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

we had a command ```build``` in our ```package.json``` files.

> looking at the package.json files, the dependencies that we have should be stored at the devDependencies.

by default npm will look for index.js, so we had to rename our javascript files.


```bash
Alexandros-MacBook-Pro:Webpack alexandrodisla$ npm run build

> Webpack@1.0.0 build /Users/alexandrodisla/Desktop/repo/formation/Mosh/Javascript-OOP/Webpack
> webpack

Hash: 6700df793fb31b213684
Version: webpack 4.29.6
Time: 6625ms
Built at: 03/27/2019 9:50:25 AM
                       Asset      Size  Chunks             Chunk Names
main.0da91d1d57e05b35c98e.js  5.64 KiB    main  [emitted]  main
Entrypoint main = main.0da91d1d57e05b35c98e.js
[./src/circle.js] 1.07 KiB {main} [built]
[./src/index.js] 100 bytes {main} [built]
```

>We will have two files in our dist directory, the code had been uglify. One bundle for each files.

We will had the entry point to our index.html in the webpack directory.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>Object Oriented Programming</h1>
    <!--  the entry point bundle -->
    <script src="./dist/main.0da91d1d57e05b35c98e.js"></script>
</body>

</html>
```

> in console: ```[Log] Circle {}
[Log] Circle with the radius of 10
[Log] undefined```

We will make webpack regenerate our bundle every time we make a changes to our file.

```json
{
  "name": "Webpack",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "dependencies": {
    "babel-plugin-syntax-dynamic-import": "^6.18.0",
    "babel-loader": "^8.0.5",
    "uglifyjs-webpack-plugin": "^2.1.2",
    "webpack-cli": "^3.3.0",
    "webpack": "^4.29.6"
  },
  "devDependencies": {},
  "scripts": {
    "build": "webpack -w",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

> ```"build": "webpack -w"``` the w stand for watch.

```bash
Alexandros-MacBook-Pro:Webpack alexandrodisla$ npm run build

> Webpack@1.0.0 build /Users/alexandrodisla/Desktop/repo/formation/Mosh/Javascript-OOP/Webpack
> webpack -w


webpack is watching the files…

Hash: 6700df793fb31b213684
Version: webpack 4.29.6
Time: 4558ms
Built at: 03/27/2019 10:24:26 AM
                       Asset      Size  Chunks             Chunk Names
main.0da91d1d57e05b35c98e.js  5.64 KiB    main  [emitted]  main
Entrypoint main = main.0da91d1d57e05b35c98e.js
[./src/circle.js] 1.07 KiB {main} [built]
[./src/index.js] 100 bytes {main} [built]

# the teminal is still actives.
```

we have changed index.js in our ```webpack/src``` directory.

```javascript
import {
    Circle
} from "./circle.js";

const s = new Circle(10);
console.log(s);
console.log(s.draw());

// the changes to see how webpack reacts
console.log("Webpack will changes the bundle");
```

We have a new entry point for our bundle

```bash
Alexandros-MacBook-Pro:Webpack alexandrodisla$ npm run build

> Webpack@1.0.0 build /Users/alexandrodisla/Desktop/repo/formation/Mosh/Javascript-OOP/Webpack
> webpack -w


webpack is watching the files…

Hash: 6700df793fb31b213684
Version: webpack 4.29.6
Time: 4558ms
Built at: 03/27/2019 10:24:26 AM
                       Asset      Size  Chunks             Chunk Names
main.0da91d1d57e05b35c98e.js  5.64 KiB    main  [emitted]  main
Entrypoint main = main.0da91d1d57e05b35c98e.js
[./src/circle.js] 1.07 KiB {main} [built]
[./src/index.js] 100 bytes {main} [built]
Hash: 5cb5662b8d3e715001b7
Version: webpack 4.29.6
Time: 32ms
Built at: 03/27/2019 10:27:24 AM
                       Asset      Size  Chunks             Chunk Names
main.c502ecbbed895cd9a1e3.js  5.73 KiB    main  [emitted]  main
Entrypoint main = main.c502ecbbed895cd9a1e3.js
[./src/index.js] 190 bytes {main} [built]
    + 1 hidden module
# the terminal is still running
```

maybe this version of webpack isn't updating the same entry point. As we can see we have a new one, becuase we change index.js. Now we have to change our index.html.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>Object Oriented Programming</h1>
    <!-- the entry point bundle -->
    <script src="./dist/main.c502ecbbed895cd9a1e3.js"></script>
</body>

</html>
```

> in console: ```[Log] Circle {}
[Log] Circle with the radius of 10
[Log] undefined
[Log] Webpack will changes the bundle```

Pour finir:

> we don't need to specify the extension anymore ```./circle.js``.

```javascript
import {
    Circle
} from "./circle";

const s = new Circle(10);
console.log(s);
console.log(s.draw());

// the changes to see how webpack reacts
console.log("Webpack will changes the bundle");
```

It will work, but will also changed the entry point of our bundle. Do COntrol+c to close the running webpack.

-------