# Object Oriented Programming JS: Chapter 3 (Prototypes)

## Chapter 3: Prototypes

### Inheritance (prototypical,multilevel)

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

### Property Descriptors

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

### Constructor Property

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

### Prototype vs Instance member

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

#### Iterating instance and prototype members

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

### Avoid Extending the built-in Objects

> Don't modify objects you don't own. Don't override methods and properties. Don't add new methods and properties in the built-in objects. Don't remove existing properties and methods. To avoid create all sort of issues.

- libraries dependencies can be compromised.
- ended up with the same named method or property with differant implementation.
- debugging issue
- etc.

### Chapter 3 - Exercises

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
