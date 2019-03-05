# Object Oriented Programming: Javascript

----------------------

# Chapter 1: Getting Started

## What's OOP

> OOP is a programming paradigm (style of programming) centered around objects rather than functions.  OOP is not a programming language or a tool.

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

 1. Encapsulation

 > Encapsulation is the fact that we regroup the related funcions and variables into a unit called Object. In this object, the variables are refered as properties and the the functions as methods.

```javascript
// procedural programming
let baseSalary = 4600;
let overtime = 4;
let rate = 0;

function getwage(baseSalary,overtime,rate){
    return baseSalary + (overtime*rate);
}
// you would do
getwage();

// object oriented programming
// we create the object employeeMPCE
let employeeMPCE = {
    baseSalary : 4600,
    overtime : 4,
    rate : 0,
    getwage: function(){
        return console.log(this.baseSalary + (this.overtime*this.rate));
    }
};
employeeMPCE.getwage(); //method
console.log((employeeMPCE.baseSalary)); // property
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
    baseSalary : 4600,
    overtime : 4,
    rate : 0,
    getwage: function(){
        return console.log(this.baseSalary + (this.overtime*this.rate));
    }
};
employeeMPCE.getwage();
console.log((employeeMPCE.baseSalary)); 
///////////////// or
let circle = {
    radius: 1,
    location:{
        x:1,
        y:2
    },
    draw:function(){
        console.log('draw');
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
function dcircle(radius,x,y){
    return {
        radius,
        x,
        y,
        draw:function(){
            console.log("factory");
        }
    };
}
// Now in Javascript, when creating a factory function,
// the properties can be use as parameters

const circle = dcircle(1,1,1); // we create (by use) the object

circle.draw(); // access the function (since the function is log)
console.log(circle.radius); // access the value
```

The other option is to create a **constructor function**:

> The naming convention of an constructors is different. We must start with an uppercase letter at the beginning. The constructor method looks like your are creating an instance of a classe. In Javascript we don't have the concept of classes. 

```javascript
// factory function
function dcircle(radius,x,y){
    return {
        radius,
        x,
        y,
        draw:function(){
            console.log("factory");
        }
    };
}
// Now in Javascript, when creating a factory function,
// the properties can be use as an parameters

const circle = dcircle(1,1,1); // we create (by use) the object

circle.draw(); // access the function (since the function is log)
console.log(circle.radius); // access the value
//////////////////////

//constructors

function Cercle(r,u,t){
   // console.log("this", this) // reference the global object
    this.r = r; // this : the reference executing the code
    this.u = u; // this : indicate an empty object in memory
    this.t = t; // This : set the properties and methods
    this.trace = function(){
        console.log("Constructors");
    }
}
const autre  =  new Cercle(2,2,2); 
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

We see that array and function are technically  objects. We will see how primitives and reference types (objects) behave differently.

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
 "centre location"
// centre location is not a valid identifier. Same as Centre-location.
// you can't use the dot notation on either one of them.
autre["centre location" ]
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
 
for(let key in autre){
    console.log(key, autre[key])
}
// output the keys and their values
/////////

// return the methods only:
for(let key in autre){
    if(typeof(autre[key]) !== 'function'){
        console.log(key, autre[key])
    }
}
 //another method is to use directly 
//the Object built-in function-object.
console.log(Object.keys(autre));

//check if a key is in an object.
if("r" in autre){
    console.log(true)
}
```  

## Abstraction  

> Hide the details and show the essentials.

```javascript
// everything is accessible
function Cercle(radius){
    this.radius = radius; 
    this.dloc = {x:0, y:0}; 
    this.comoploc = function(){
        // ...
    };
    this.trace = function(){
        this.comoploc();
        console.log("Constructors");
    };
}
const autre  =  new Cercle(2); 
autre.trace();
console.log(autre.radius);
```

Private properties, methods, getters and setters:

> this.a = a set a as property. but you can define it as a local variable to hide it in the constructor function.  

```javascript
function Cercle(radius){
    this.radius = radius; 
    let dloc = {x:0, y:0}; // private property
    this.trace = function(){
        console.log("Constructors");
    };
    Object.defineProperty(this, "dloc",{
        get: function(){
            return dloc;
        }, //
        set: function(value){
            if(!value.x || !value.y){
                throw new Error("invalid location");
            }
            dloc = value;
        }
    }); // private but can be dispay
}
const autre  =  new Cercle(2); 
autre.trace();
console.log(autre.radius);
console.log(autre.dloc); // we are accessing this private 
// private property with this getter
autre.dloc = 1; // we access and set the value externally
// with the setters
```

A getter is a function that we use to get a property (read-only property). A setter is a function that will allow us to set a property form the outside.

# Chapter 1-Exercises

 1. Make a stop watch

 - gives the duration as a property
 - start is a method
 - stop is a method
 - can't start twice
 - after sop continue the initail count
 -  reset method will restart the watch at 0
 - initial state is 0

```javascript
// watch object - constructor function
function watch(){
    // private properties
    // for implementation details
    let startime=0;
    let endtime=0;
    let runtime = false; // 0
    // wil be display on the screen
    let duration = 0;
    // we need 3 button 
    this.start = function(){
        if(runtime){
            throw new Error("is running");
        }
        // we change the runtime state so the error
        // will be catch
        runtime = true; // true means 1
        startime = new Date(); // time object
    };
    this.stop = function(){
        if(!runtime){
            throw new Error("not running");
        } ///// the calculus logic
        runtime=false; 
        // the state of the run is changed so the error
        // will be catch
        endtime= new Date(); //time object
        // Date() object has getTime() method
        // getTime() return time in millisecondes without a comma
        const sec=(endtime.getTime()-startime.getTime())/1000;
        duration+=sec;
    };
    this.reset=function(){
        startime = 0;
        endtime= 0;
        runtime=false;
        duration=0;
    };
    Object.defineProperty(this,'duration',{
        // a getter to expose duration
        get:
        function(){
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

And the previous chapter we used ```Object.defineProperty()``` to define the attributes getters and setters. Now as we can see, we can define more attributes.

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

```c1.toString()``` will output the object and the prototype of that object: ```"[object Object]"```. c1 as an instance of Cercle object inherit this method from the prototype Object. We can oeverride this methode like this.

```javascript
function Cercle(radius){
    this.radius = radius;
}

// let's put the draw method on the prototype of the
// Cercle object.
Cercle.prototype.draw = function(){
    console.log('draw');
};

const c1 = new Cercle(1);
const c2  = new Cercle(2);

// let's access the draw method

Cercle.prototype.toString = function(){
    return "Cercle with the radius "+ this.radius;
}
// in console
> c1.toString()
< "Cercle with the radius 1"
```

So ```Cercle.prototype``` is a way for us to modify the prototype as we see fit.

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

```console.log(Object.keys(c1));``` only return instance members: ```[Log] ["radius", "move"] (2) (oop.js, line 19)```.

But the ```for(let k in c1){console.log(k)};``` will return the instance and the prototype members.

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
function watch(){
    // we most expose these private properties
    // as read-only.
    let startime=0;
    let endtime=0;
    let runtime = false; 
    let duration = 0;
    // getter to expose the duration property as readonly.
    Object.defineProperty(this,'duration',{
        get: function(){
            return duration;
        },
        // this implementation has a weakness
        // we can simply modify externally the value
        // of the duration
        set: function(value){
            duration = value;
        }
    });
    // getter to expose the 3 other privates properties
    // as readonly.
    Object.defineProperty(this,'startime',{
        get: function(){
            return startime;
        }
    });
    Object.defineProperty(this,'endtime',{     
        get: function(){
            return endtime;
        }
    });
    Object.defineProperty(this,'runtime',{
        get: function(){
            return runtime;
        }
    });
}

 watch.prototype.start = function(){
    if(this.runtime){
        throw new Error("is running");
    }
    this.runtime = true; 
    this.startime = new Date(); 
};
watch.prototype.stop = function(){
    if(!this.runtime){
        throw new Error("not running");
    } 
    this.runtime=false; 
    this.endtime= new Date(); 
    const sec=(this.endtime.getTime()-this.startime.getTime())/1000;
    // in order to record the duration, we had to use
    // a setter.
    this.duration+=sec;
};
watch.prototype.reset=function(){
    this.startime = 0;
    this.endtime= 0;
    this.runtime=false;
    this.duration=0;
};

const stopwatch = new watch();
```

It was a bad idea to do this implementation for this object. It brokes the abstraction principle. Premature optimization is the root of all evils.

# Chapter 3: Prototypical INheritance










