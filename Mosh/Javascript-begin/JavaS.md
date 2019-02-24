# Begin:Javascript

-----------------

## Chapter 1: Getting Started

> Javascript is a programming, scripting and markup languages.

Due to intense community support and investment of big companies, these days with javascript you can build:

- web/ Mobile apps
- real time network apps
- Command line Tools
- Games

Javascript run in the javascript engine of the browser you are using.

- The browsers have a JavaScript Engine (firefox: SpiderMonkey; Chrome:v8)
- Node = v8 + c++
- Ecmascript is specification = reponsible for defining standards or features for javascript

### Setting-up the Environment

- An IDE or code editor = Visual studio code.  
- Download nodejs  
- Live server (in Visual studio code)
- The index.html will be our host for the javascript code.
- Live server template allow us to serve our code into the browser simultaneously.

Where to run JS code?

- Head tag or Body Tag

> It is best practice to put the js codes at the end of the body tag.  Two main reason:   

1. your browser is going to parse the index file (run over the code). ANd since you will have a lot of javascript codes, the browser might get busy by going over those codes. (At the end your web page will take time to load) It won't be able to render the web page. This will create a bad user experience.
2. The code, that we have on this web page, needs to talk to the element of this web page.

- Exception: If you are using third party codes you can put them on the head tag or section.

Basics?

- A statement: is a piece of code that express an action to be carried out. In this case we want to log a message in the console. It ends by a ";".  
- A string: is a sequence of character.
- //: is used to add comment.

### Separation concern 

> Just as Css, you can create a separate .js files (.css and the case of css). Then you will have to link this file to the index.html file or the main html file with an link tag (anchor or hyperlink tag). We want to separate html, which is all about content, from javascript which is all about behavior.

In our case, we have already an index.html. We create an index.js files then we add ou js codes:

```javascript
// comment for the why's
console.log("Hello World");
```

Now we link the index.js to the html like this.

```html
<script src="index.js"></script>
```

# Chapter 2: Variables

> In programming we use variable to store data temporarily in the computers memory.

-> In JS you have to declare your variable.

> In principle "var" should do the job. But there 's a lot of problem associate to this method. The best practice is to use "let"

```javascript
let name = 'Alexandro Disla';
console.log(name);
// some rules:
// the variable can't be a reserve keywords
// They should be meaningful
// They can't start with a number
// they can't contain space or number
// They are case-sensitive
// stick to camel notation  (FirstName)
```

> best pratice to declare multiple varables  

```javascript
let FirstName =  "Alex"
let LastName = "Disla"
```  

## Constant  

-> They are constant variables  

```javascript
const irate = 0.3;
irate = 10;
 // it will throw an error 
//we can't not reassign a constant
console.log(irate)
```   

> Best practice:  If you don't need to reassine the value of a variable. Use "const" when you a declaring and initiate the value of the variable.

## Primtives and References types 

We have two caterogies:

- primitives/value types  
- references types

### Primitives

1. string
2. number
3. boolean
4. undefined
5. null
6. symbol

```javascript
let name = 'alex'; // string literal
let age = 30; // numeric literal
let isapproved = true; // or false. boolean literal
let fname = undefined; // let fname; will do the same.
// not very common to do let fname = undefined;.
let selectedcolor = null; // to clear the value of a variable. typof -> objects!!!!!
```

#### Dynamic Typing

> type of a variable is set. Type of a variable change at run time.

- static (statically-typed) language

> Static typing means that types are known and checked for correctness before running your program. This is often done by the language's compiler. For example, the following Java method would cause a compile-error, before you run your program:

```java
public void foo() {
    int x = 5;
    boolean b = x;
}
```

- dynamic (dynamically-typed) language

> Dynamic typing means that types are only known as your program is running. For example, the following Python (3, if it matters) script can be run without problems:

```python
def erroneous():
    s = 'cat' - 1

print('hi!')
```  

> It will indeed output hi!. But if we call erroneous:  

```python
def erroneous():
    s = 'cat' - 1

erroneous()
print('hi!')
# A TypeError will be raised at run-time when erroneous is called.
```

> javascript is a dynamic language

### Reference Types  

- Object
- Array
- function

#### Object

> when we are dealing with multiple related variables. we can put these variables inside of an object. Objects have properties.

```javascript
let person = {
    name:'Alexandro',
    age: 27
}; // object literal - key:value pairs

// two way to access the properties

// dot notation
person.name = 'Disla';
// that's the default way

// bracket notation. pass a srting
// with the target property
 person['name'] = 'Sandro';
// this method has his benefit, a user can access
// a target property at run time. Dynamic way!!!
let selection = 'name';
person[selection] = 'Lelex';
// if we did
// let person = {}; we would have an empty array.
 console.log(person.name);
```  

#### Array

> The index of the first element in an array start with 0.  We use the index to access the elements inside of an array. The fact that javascript is a dynamic language means that the length of an array (position of the elements) change at run time.
In javascript we can store different types of element in an array. Technically, An array is an object. Why? The array has multiple properties that we can access.
An Array is a data structure that we use to represent a list of items.

```javascript
let selectedColors = ['red', 'blue'];
// array literal
// let selectedColors = []; - empty arrays
selectedColors[2] = 1;

console.log(selectedColors.length)
```  

#### Function and types of function

> Function is a fundamental building blocks in javascript. A set of statements that performs a task or calculate a value. The function can have "parameters (at the time of declaration) = arguments (actual value we supply to that parameter)". The defaulf value of variables in JS is undefined. Technically, seems like a function is also an object.

```javascript
// performing a task
function greet(fname,lname){
    // string concatenation similar to
    // python, c++ and c#
    console.log('Hello'+' '+fname+' '+lname);
} // no need of ; function literal

 greet("Jhonny", "Bravo");

// calculate something 
function square(number){
    return number*number;
}

console.log(square(2)); 
// uesed as an argument of console.log
// square(2) is the expression of the function
// square.
```

## Chapter 3: Operators

we have different kind of operator.

> variable or constant + operator = expression.

With this expression:

> expressions -> logic or Algorithms.

list of operators:

- Arithmetic
- Assignement
- Comparison
- Logical
- Bitwise

### Arithmetic Operator

```javascript
let x = 10;
let y = 11;

// arithmetic 
console.log(x+y);
//x+y is an expression.
// An expression is a piece of code that produce a value.
console.log(x-y);
console.log(x/y);
console.log(x*y);
console.log(x%y); // modulo
console.log(x**y); // exponantiel

// incrementation
console.log(x++); // 10
//another behavior
console.log(++x); // 11

// decrimentation
console.log(x--); // 10
//another behavior
console.log(--x); // 9
```

### Assignement Operator

```javascript
// Assignement operator
let x = 10;
// increment operator
x++;
 // is the same as 
 x = x + 1;
 // other possibility
x = x+5;
x+=5;
x = x*3;
x*=3;
// all the arithmetic operator
//  has this shorthand combination pattern
// with the assignment operator
```

### comparison operator

```javascript
// comparison operator
let x = 100;
//list of operator

// relational
console.log(x>0);
console.log(x<0);
console.log(x>=0);
console.log(x<=0);
//equality
console.log(x===100);
console.log(x!==100);
//logical
console.log(x>0 && x<101); // a et b
console.log(x>0 || x>100); // a ou b
```

> The result of an expression that include comparison operator is a boolean (true or false).

### Equality operator

> The strict equality  operator insures to us that both side have the same type and value.  
The lose equality operator doesn't care about the types machine. If the types aren't the same, it will convert the type we have on the right side to match what we have on the left side. And then it will check if the values are equal.

The same reflexion applies to strict inequality or lose inequality.

```javascript
//strict equality
console.log(0===false);

//lose equality operator
console.log(0==false);
// false is convert naturally to 0. 
// remember true is 1 and false is 0.

// In console
[Log] false (main.js, line 3)
[Log] true (main.js, line 6)

// analogicly

//strict inequality
console.log(0!==false);

//lose inequality operator
console.log(0!=false);

//strict equality
console.log(0!==false);

//lose equality operator
console.log(0!=false);

//in console 
[Log] true (main.js, line 3)
[Log] false (main.js, line 6)
```

In any given situation, The strict way is more precise and accurate.

### Ternary operator


```javascript
let p = 110;
let t = p > 100 ? 'gold' : 'silver';
// ? and : are the ternary operator
// ? 'gold' mean if expression true then gold be display
// : 'silver' if not sylver will be dislplay
console.log(t);
// console
[Log] gold (main.js, line 5)

let p = 3;
let t = p > 100 ? 'gold' : 'silver';
// ? and : are the ternary operator
// ? 'gold' mean if expression true then gold be display
// : 'silver' if not sylver will be dislplay
console.log(t);
//console
[Log] silver (main.js, line 7)
```

### logical operator

```javascript
console.log(true&&true); 
// is true, only in this case.
// maths a et b (logic matrix)
console.log(true||false);
// is true, if one of the operand is true
// a ou b

console.log(!true);
// will return false
// non a 
```

### logical operator with non-boolean

The result of a logical expression is not necessarly a true or false. That depends entirely on the value of the operands.

In javascript, we have the concept of falsy or truthy

falsy:

- false
- undefined
- null
- 0 
- false
- '' or ""
- NaN

Anything that is not falsy is truthy

```javascript
false||"a"
// javascript will evaluate "a"
// "a" is not an empty string so
//"a" is truthy and will be return
false||1
// 1 is a truthy and will be return

// short-circuting
false||1||2
// the evaluation will stop right after
// false||1
// 1 will be return
```

Real world example:

```javascript
let usercolor = 'red';
let defaultcolor = 'blue';
let currentColor = usercolor || defaultcolor;

console.log(currentColor);
// in console
[Log] red (main.js, line 5)
////
let usercolor = ''; // or undifined (they are falsy)
let defaultcolor = 'blue';
let currentColor = usercolor || defaultcolor;

console.log(currentColor);
// in console
[Log] blue (main.js, line 5)
```

### Bitewise Operator

[Decimal TO binary](https://www.electronics-tutorials.ws/binary/bin_2.html)

```javascript
// bitewise OR is different than logical or ||
// bitewise AND is different than logical or &&
console.log(1|2); // R
console.log(1&2); // R2
// decimal to binary
// 1 = 00000001
// 2 = 00000010
// the evaluation process:
// R = 00000011 = 3 // becuz of the OR
//R2 = 00000000 = 0 // becuz of the AND

//in  console
[Log] 3 (main.js, line 3)
[Log] 0 (main.js, line 4)
```

Lets implement a real life example:

```javascript
// Access controle System
// read, write, execute
// 00000100 read  = 4
// 0000010 read and write = 2
// 00000001 execute = 1

const readperm = 4;
const writeperm = 2;
const eperm = 1;

// permission recorded
let myperm = 0;
// we add permission with bitewise OR operator
myperm = myperm | readperm | writeperm | eperm;

// evaluation
// check permission with the bitewise AND operators
let message =(myperm & readperm) ? "yes" : "no";

console.log(message);
// in console
[Log] yes (main.js, line 20)
```

### operator precedence

```javascript
// P.E.M.D.A.S

let x = 2+3+4*3;
console.log(x);
// 17
```

### EXercise - Chapter 1

Swapping Value of 2 variables

```javascript
let a = "blue";
let b = " red";

let c = " ";

// overwrite logic:
c = a;
a = b;
b= c;

console.log(a);
console.log(b);
```

## Chapter 2: Control Flow

### COnditional Statements

IN javascript we have two type of conditional statements.

- if and else
- switch and case

#### If and Else

```javascript
// basics structure
if(condition){
    // one or multiple
    statements;
}
else if(anothercondition){
    // one or multiple
    statements;
}
// we can have multiple else if
else if(yetanothercondition){
    // one or multiple
    statements;
}
else{
    // if nun of the previous condition are true
    // one or multiple
    statements;
}
// what we call condition here is a mixed of expression and operators.
```

A practical example:

```javascript
let hour = 22;

if(hour>=6&&hour<12){
    console.log('Good morning');
}
else if(hour>=12&&hour<=18){
    console.log('Good Morning');
}
else{
    console.log('Good Evening');
}
```

#### Switch and case

```javascript
let variable;

switch(variable){
    case 'value':
        statements;
        break;
    // Multiple case
    case 'value2':
        statements;
        break;
    // the default doesn't need a break
    default:
        statements;
}
```

With switch and case we can compare the value of a variable against different value.

