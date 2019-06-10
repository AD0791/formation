# Javascript C.W.M: Chapter 7 (functions)

## Chapter 7 - Functions

### Function declaration vs expressions

In javascript we have two ways to define a function.

- function declasration
- function expression (named or anonymous)

```javascript
// function declaration
function walk(){
    console.log('walk');
}
walk();

// function named expression

// can be a const
// similar to R
let run = function action(){
    console.log('Flash mode');
}
run();

// function anonymous expression
let speed = function(){
    console.log('Usain Bolt is scared')
}
speed();

// remmeber function are object.

// in console
[Log] walk (main.js, line 3)
[Log] Flash mode (main.js, line 12)
[Log] Usain Bolt is scared (main.js, line 18)
```

Hoisting

> The difference between the function declaration and the function expression:  
> We can call the function `walk` using the function declaration syntax before the definition of the function. But this isn't possible with the function expression syntax.

```javascript
// function declaration
walk();
function walk(){
    console.log('walk');
}

// function named expression
run();
let run = function action(){
    console.log('Flash mode');
}

// function anonymous expression
speed();
let speed = function(){
    console.log('Usain Bolt is scared')
}

// in console (2 errors)
[Log] walk (main.js, line 4)
[Error] ReferenceError: Cannot access uninitialized variable.
    Global Code (main.js:8)
[Error] ReferenceError: Cannot access uninitialized variable.
    Global Code (main.js:8)
```

definition of hoisting: At runTime the javascript engine will move all the function declaration at the top. They will be executed (interporeted first).

> [Hoisting](https://www.w3schools.com/js/js_hoisting.asp)

### Arguments

```javascript
function sum(a,b){
    console.log(arguments);
    return a+b;
}
// an empty array has a length of 0
// but it ain't quite empty you will get 0

// a and b by default are undefined
console.log(sum(1)); // 1 + undefined
console.log(sum()); // undefined + undefined
console.log(sum(1,2,3,4,4,5,5,6))
 // the function will do 1+2 by default although
 // the arguments objects will record the other args

// the arguments property is an object

console.log(typeof(sum.arguments));

// we can work with argument object
// to simplify this code

function addition(){
    let total = 0;
    for(let add of arguments){
        total+=add;
    }
    return total;
}

console.log(addition(1,2,3,4,4,5,5,6));
console.log(addition(1,2,3,4,5,6,200,300));

// in console
[Log] Arguments [1] (1) (main.js, line 2)
[Log] NaN (main.js, line 9)
[Log] Arguments [] (0) (main.js, line 2)
[Log] NaN (main.js, line 10)
[Log] Arguments [1, 2, 3, 4, 4, 5, 5, 6] (8) (main.js, line 2)
[Log] 3 (main.js, line 11)
[Log] object (main.js, line 17)
[Log] 30 (main.js, line 30)
[Log] 521 (main.js, line 31)
```

The rest operator

The rest operator will put all our arguments inside an array. The rest operator has the same syntax as the spread operator with different usecase.

> The rest parameter should be the last parameter of a function.

```javascript
function add(...args){
    console.log(typeof(args));
    console.log(args);
    // args is an array (array is an object)
    return args.reduce((a,b)=>a+b);
}
console.log(add(1,2,3,4,4,5,5,6));
console.log(add(1,2,3,4,5,6,200,300));

// in console
[Log] object (main.js, line 15)
[Log] [1, 2, 3, 4, 4, 5, 5, 6] (8) (main.js, line 16)
[Log] 30 (main.js, line 20)
[Log] object (main.js, line 15)
[Log] [1, 2, 3, 4, 5, 6, 200, 300] (8) (main.js, line 16)
[Log] 521 (main.js, line 21)
```

Practical example

```javascript
/ rate is in the range of 0.1 to 0.9
function discount(rate,...prices){
    const total = prices.reduce((a,b)=>a+b);
    return total *(1-rate);
}
console.log(discount(0.6,50000,90909090,30495595905));
// in console
[Log] 12234621998 (main.js, line 28)
```

Default Parameters

```javascript
function interest(principal,rate,years){
    // default value
    rate = rate||3.5;
    years = years||5;

    return ((principal*rate)/100)*years;
}
console.log(interest(10000,3.5,5));
console.log(interest(10000));
// in console
[Log] 1750 (main.js, line 8)
[Log] 1750 (main.js, line 9)
```

```javascript
// default value (2mode)
function interest(principal,rate=3.5,years=5){
    return ((principal*rate)/100)*years;
}
console.log(interest(10000,3.5,5));
console.log(interest(10000));

// in console
[Log] 1750 (main.js, line 5)
[Log] 1750 (main.js, line 6)
```

> when you give an operator a default value, `2mode`
> (nb: 2mode is my creation to avoid confusion), we must also give a default value to the folllowing parameters.

```javascript
// default value
function interest(principal,rate=3.5,years){
    return ((principal*rate)/100)*years;
}
console.log(interest(10000,3.5,5));
console.log(interest(10000));
// console
[Log] 1750 (main.js, line 5)
[Log] NaN (main.js, line 6)

// to bypass
console.log(interest(10000,3.5,5));
console.log(interest(10000,undefined,5));
//console 2
[Log] 1750 (main.js, line 5)
[Log] 1750 (main.js, line 6)
// undefined will reference the rate parameter and
// the fact that the year parameter wasn't defined by default.
// it's bad practice
```

### Getters and setters

At this point, we will how to set or exposed properties of an object for utilies.

```javascript
// display a person fullname
const person= {
    fname:"Alexandro",
    lname:"Disla",
    // two way to play with function in object
    nom : function(){
        return `${person.fname} ${person.lname}`;
    },
    // no need of keyword function
    nomComplet(){
        return `${person.fname} ${person.lname}`;
    }
};

console.log(person.nom());
console.log(person.nomComplet());

// console
[Log] Alexandro Disla (main.js, line 15)
[Log] Alexandro Disla (main.js, line 16)
```

Getters will put it to read-only.

- getters allow us to access a property
- setter allow us to change or mutate a property

```javascript
// display a person fullname
const person= {
    fname:"Alexandro",
    lname:"Disla",
    get nomComplet(){
        return `${person.fname} ${person.lname}`;
    },
    set entry(value){
        const parts= value.split(' ');
        this.fname = parts[0];
        this.lname = parts[1];
    }
};
console.log(person.nomComplet);

// lets set a new name
person.entry='Lelex AD0791'
console.log(person);

// in console
[Log] Alexandro Disla (main.js, line 14)
[Log] Object (main.js, line 18)
entry:
fname: "Lelex"
lname: "AD0791"
nomComplet:
Object Prototype
```

### try and catch

Error handeling is also called defensive programming.

```javascript
// display a person fullname
const person= {
    fname:"Alexandro",
    lname:"Disla",
    get nomComplet(){
        return `${person.fname} ${person.lname}`;
    },
    set entry(value){
        //defensive programming

        // this way the error will not pass
        // the code will not run
        // if(typeof(value)!=='string')return;

        // another way
        // throw  new error object
        // Error() is a constructor function
        // We throw an exception
        if(typeof(value)!=='string'){
            throw new Error("It's not an string");;
        }
        const parts= value.split(' ');
        if(parts.length!==2){
            throw new Error("Enter fname and lname");;
        }
        this.fname = parts[0];
        this.lname = parts[1];
    }
};
console.log(person.nomComplet);

// handle the exception
try{
person.entry=null;
}
catch(e){
    // e reference the error object
    console.log(e);
    alert(e);
};
try{
    person.entry='';
}
    catch(e){
        // e reference the error object
        console.log(e);
        alert(e);
    };


console.log(person);
// in console
[Log] Alexandro Disla (main.js, line 30)
[Log] Error: It's not an string — main.js:20 (main.js, line 38)
[Log] Error: Enter fname and lname — main.js:24 (main.js, line 46)
[Log] {fname: "Alexandro", lname: "Disla"} (main.js, line 51)
```

Keep in mind that `alert` is an older to handle exception.

### Local and scope

```javascript
const mess = "hi";
console.log(mess);
// in console
[Log] hi (main.js, line 2)
//
// but
// { here is a code block}
{
    const mess = "hi";
}
console.log(mess);
//in console
[Error] ReferenceError: Can't find variable: mess
	Global Code (main.js:6)
```

> A scope of a variable or constant determine where that variable or console is accessible. A global variable or constant is accessible everywhere.
> local variable and constant take precedence over global variable and constant.

```javascript
// global constant
const color = "red";

function start() {
  const mess = "hi";
  const color = "blue";
  console.log(color); // blue will be display
  // local var or const > globala var or constant
  // its bad practice though
  console.log(mess); // good
}
console.log(mess); // we will get error

if (true) {
  const mes2 = "hi";
  console.log(mes2); // good
}
console.log(mes2); // we will get error

for (let i = 0; i < 5; i++) {
  console.log(i); // good
}
console.log(i); // we will get error

function start() {
  const mess = "hi"; // valid
  console.log(mess); // good
}

function stop() {
  const mess = "hi"; // valid
  console.log(mess); // good
}
```

### let and var

var comes with a lot of problems.

```javascript
// let vs var

for(let i =0;i<10;i++){
    console.log(i);
}
console.log(i); // scope issue
// console
[Log] 0 (main.js, line 4)
[Log] 1 (main.js, line 4)
[Log] 2 (main.js, line 4)
[Log] 3 (main.js, line 4)
[Log] 4 (main.js, line 4)
[Log] 5 (main.js, line 4)
[Log] 6 (main.js, line 4)
[Log] 7 (main.js, line 4)
[Log] 8 (main.js, line 4)
[Log] 9 (main.js, line 4)
[Error] ReferenceError: Can't find variable: i
	Global Code (main.js:6)

// var case
for(var i =0;i<10;i++){
    console.log(i);
}
console.log(i); // scope issue disapear
// console 2
[Log] 0 (main.js, line 4)
[Log] 1 (main.js, line 4)
[Log] 2 (main.js, line 4)
[Log] 3 (main.js, line 4)
[Log] 4 (main.js, line 4)
[Log] 5 (main.js, line 4)
[Log] 6 (main.js, line 4)
[Log] 7 (main.js, line 4)
[Log] 8 (main.js, line 4)
[Log] 9 (main.js, line 4)
[Log] 10 (main.js, line 6)
```

with `var i =0;`, `i` is accessible out of the scope of the block of the for loop.

- ES6 (Ecmasscript2015): `let, const` create block-scoped variables
- `var` creates function-scoped variable

The `var` attach our variables to the window object. (which is bad practice)

```javascript
// on global variable
var color = 'red';
let age = 27;
// console
> window
< Window {document: #document, NaN: NaN, color: "red", window: Window, Infinity: Infinity, …}
> window.color
< "red"
```

When we define a function, that function is a global function. That function is attach to the global object `window`.

### The this keyword

> `this` references the object that is executing the current function.

- for a method, it references the object (function are object, object).
- for a function, it references the global object (window,global).

the call back function is just a regular function. Used in an object, it won't be considered as a method. The function are attach to the gobale object.

```javascript
// call back is not a method
const video = {
    title:'xbox1',
    player:['aria','aegon','cali','lelex'],
    show(){
        this.player.forEach(function(t){
            console.log(this);
        });

    }
}
video.show();
// console
// the element of player are attach to the
// global object: window
[Log] Window {document: #document, NaN: NaN, window: Window, Infinity: Infinity, undefined: undefined, …} (main.js, line 6)
[Log] Window {document: #document, NaN: NaN, window: Window, Infinity: Infinity, undefined: undefined, …} (main.js, line 6)
[Log] Window {document: #document, NaN: NaN, window: Window, Infinity: Infinity, undefined: undefined, …} (main.js, line 6)
[Log] Window {document: #document, NaN: NaN, window: Window, Infinity: Infinity, undefined: undefined, …} (main.js, line 6)
//
// but
const video = {
    title:'xbox1',
    player:['aria','aegon','cali','lelex'],
    show(){
        this.player.forEach(function(t){
            console.log(this);
        },this);
        // this as second arguments assure us that
        // the call back function is operating as
        // a method
    }
}
video.show();
//console 2
[Log] {title: "xbox1", player: ["aria", "aegon", "cali", "lelex"], show: function} (main.js, line 6)
[Log] {title: "xbox1", player: ["aria", "aegon", "cali", "lelex"], show: function} (main.js, line 6)
[Log] {title: "xbox1", player: ["aria", "aegon", "cali", "lelex"], show: function} (main.js, line 6)
[Log] {title: "xbox1", player: ["aria", "aegon", "cali", "lelex"], show: function} (main.js, line 6)
// we are sure that the call back function
// is behaving as a method.
```

the answer now.

```javascript
const video = {
    title:'xbox1',
    player:['aria','aegon','cali','lelex'],
    show(){
        this.player.forEach(function(t){
            console.log(this.title,t);
        },this);
        // this as second arguments assure us that
        // the call back function is operating as
        // a method
    }
}
video.show();
// console
[Log] xbox1 – "aria" (main.js, line 6)
[Log] xbox1 – "aegon" (main.js, line 6)
[Log] xbox1 – "cali" (main.js, line 6)
[Log] xbox1 – "lelex" (main.js, line 6)
```

### Change this

```javascript
// not quite a good practice
const video = {
    title:'xbox1',
    player:['aria','aegon','cali','lelex'],
    show(){
        const self = this;
        this.player.forEach(function(t){
            console.log(self.title,t);
        });
    }
}
// self is referencing the object
// the callback function will behave like a method.
video.show();
//console
[Log] xbox1 – "aria" (main.js, line 7)
[Log] xbox1 – "aegon" (main.js, line 7)
[Log] xbox1 – "cali" (main.js, line 7)
[Log] xbox1 – "lelex" (main.js, line 7)
```

> Function in javascript are also object. We have 3 methods `apply, call, blind` that we can used to change the value of `this`.

```javascript
function playvideo(q,b){
    console.log(this);
}
// this is referencing the window object
// now
playvideo.call({almamaterre:"SLG"},1,2);
playvideo.apply({almamaterre:"SLG"}),[1,2];
// bind creates a new function from playvideo function
playvideo.bind({almamaterre:"SLG"})();
playvideo();

// console
[Log] {almamaterre: "SLG"} (main.js, line 16)
[Log] {almamaterre: "SLG"} (main.js, line 16)
[Log] {almamaterre: "SLG"} (main.js, line 16)
[Log] Window {document: #document, NaN: NaN, playvideo: function, window: Window, Infinity: Infinity, …} (main.js, line 16)
```

Now

```javascript
const video = {
    title:'xbox1',
    player:['aria','aegon','cali','lelex'],
    show(){
        this.player.forEach(function(t){
            console.log(this.title,t);
        }.bind(this));
    }
}
// with the bind method from the call back
// we are referencing the object
video.show();
// console
[Log] xbox1 – "aria" (main.js, line 6)
[Log] xbox1 – "aegon" (main.js, line 6)
[Log] xbox1 – "cali" (main.js, line 6)
[Log] xbox1 – "lelex" (main.js, line 6)
```

Arrow function can help

```javascript
const video = {
    title:'xbox1',
    player:['aria','aegon','cali','lelex'],
    show(){
        this.player.forEach(t=>{
            console.log(this.title,t);
        });
    }
}
// => inherit the this from the
// containing function  and assure use that
// we are sure that the callback will behave well.
// thanks Es6
video.show();
// console
[Log] xbox1 – "aria" (main.js, line 6)
[Log] xbox1 – "aegon" (main.js, line 6)
[Log] xbox1 – "cali" (main.js, line 6)
[Log] xbox1 – "lelex" (main.js, line 6)
```

Arrow function saves life!

## Exercise - CHapter 7

1. Sum of arguments

The rest operator convert the args, we pass to an array.

```javascript
// numbers or arrays
function sum(...items){ // rest operator
    if(items.length===1 && Array.isArray(items[0])){
        // spread operator
        items = [...items[0]];
    }
    return items.reduce((a,b)=>a+b);
}
console.log(sum(1,2,3,4,5,65435,545,434,324,24,34));
console.log(sum([1,2,3,4,5,65435,545,434,324,24,34]));
// console
[Log] 66811 (main.js, line 9)
[Log] 66811 (main.js, line 10)
```

2. Area Circle

```javascript
// radius  settable
// area read-only

const circle = {
    radius: 10,
    get area(){
        return Math.PI*this.radius*this.radius ;
    }
    // set radius(num){
    //     radius = num;
    // }
};

console.log(circle.area);
// console.log(circle.area);
//console
[Log] 314.1592653589793 (main.js, line 14)
```

3. Handeling error

```javascript
try {
  const numbers = [1, 2, 3, 4, 5, 5, 5566];
  const count = countOcc(null, 5);
  console.log(count);
} catch (e) {
  console.log(e.message);
}
function countOcc(array, selem) {
  if (!Array.isArray(array)) {
    throw new Error("Bad Array son!");
  }
  return array.reduce((acc, curr) => {
    const occ = curr === selem ? 1 : 0;
    return occ + acc;
  }, 0);
}
// console
// the error is caught
```
