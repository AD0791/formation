# Begin:Javascript

-----------------

# Chapter 1: Getting Started

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

> Best practice:  If you don't need to reassing the value of a variable. Use "const" when you a declaring and initiate the value of the variable.

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

# Chapter 3: Operators



