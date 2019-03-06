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

## Chapter 2: Variables

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

### Constant  

-> They are constant variables  

```javascript
const irate = 0.3;
irate = 10;
 // it will throw an error 
//we can't not reassign a constant
console.log(irate)
```   

> Best practice:  If you don't need to reassine the value of a variable. Use "const" when you a declaring and initiate the value of the variable.

### Primtives and References types 

We have two caterogies:

- primitives/value types  
- references types

#### Primitives

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

#### Reference Types  

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

### EXercise - Chapter 3

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

## Chapter 4: Control Flow

### COnditional Statements

IN javascript we have two type of conditional statements:

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

### Loop 

#### For Loop

we use loop to repeat an action over a number of time. In javascript we have:

- for loops
- while loops
- Do while loops
- for in loops
- for of loops

```javascript
for(initializexpr;condition;incrementexpr){
    // this loop will run as long as the condition will evaluate to true.
    statements;
}
```

Incrementation

```javascript
// i is the loop varaible
for(let i =0;i<5;i++){
    console.log("Hello World");
}
```

```javascript
for(let i =0;i<5;i++){
    if(i%2!==0){
        console.log(i);
    }
}
```

Decrementation

```javascript
for(let i=5;i>=0;i--){
    if(i%2!==0){
        console.log(i);
    }
}
```

#### While Loop

In for loops, the lopp variable is part of the loop itself. In a while loop you have to declare this variable externally.

```javascript
// firt the loop variable
let lvar;
while(conditon){
    statements;
}
```

We will make a while loop equivalent to the previous for loop.

```javascript
let i = 0;
while(i<=5){
    if(i%2!==0){
        console.log(i);
    i++;
    }
}

let i = 5;
while(i>=0){
    if(i%2!==0){
        console.log(i);
    i--;
    }
}
```

#### DO While loop

Do not make this mistake!

```javascript
let i=0;
while(i<=5){
    if(i%2!==0){
        console.log(i);
    i++;
    }
}

let i = 0;
// we will get an error in this case. We can't reassign this loop variable.
```

A do while loop:

```javascript
let lvar;
do{
    staements;
}while(condition);
```

Do while loop are always at least executed once. even if the condition is evaluate to false.

```javascript
let i = 0;
do{
    if(i%2!==0){
        console.log(i);
    i++;
    }
}while(i<=5);
// this code will be well executed.

// Now let put an error in the logic
let i = 9;
do{
    if(i%2!==0){
        console.log(i);
    i++;
    }
}while(i<=5);
// the console will return 9. becuz it's an odd number. The do will be execute. but the while condition is not correct.

// If you used a while loop:
let i=9;
while(i<=5){
    if(i%2!==0){
        console.log(i);
    i++;
    }
}
// The condition isn't correct now. The code will not be executed.
```

#### Infinite loops

You must avoid them. It can crash the browser and your pc.

Here's how you can create them:

```javascript
let i = 0;
while(i<0){
    console.log(i)
    // This will create an infinite loop
    //i++; we forget to increment
}
// you can have infinite loop with 
// do while, for loops
```

- You can't write ```while(true)```.
- don't forget ton increment or decrement.
- take good care of the condition you are using.

#### For In and For OF loops

we Use them to iterate inside of an object or an array.

```javascript
const person = {
    name:"Lelex",
    age:27;
}

for(let k in person){
    console.log(k, person[k]);
}

// ARRAY
const per = ['b','c','d','e'];

for(i in per){
    console.log(i,per[i]);
}
// in console
[Log] 0 – "b" (main.js, line 4)
[Log] 1 – "c" (main.js, line 4)
[Log] 2 – "d" (main.js, line 4)
[Log] 3 – "e" (main.js, line 4)
```

The ideal way to iterate over an Array is with the for-of loop.

```javascript
// For-In
const per = ['b','c','d','e'];

for(i in per){
    console.log(i,per[i]);
}
// in console
[Log] 0 – "b" (main.js, line 4)
[Log] 1 – "c" (main.js, line 4)
[Log] 2 – "d" (main.js, line 4)
[Log] 3 – "e" (main.js, line 4)

// For-Of
const per = ['b','c','d','e'];

for(i of per){
    console.log(i);
}
[Log] b (main.js, line 4)
[Log] c (main.js, line 4)
[Log] d (main.js, line 4)
[Log] e (main.js, line 4)
```

> best practice: YOu should use a for-in loop to iterate over element inside an object and a for-of loop to iterate over element inside an array.

#### Break and continue

```javascript
//BREAK
let i = 0;
while(i<=10){
    if(i===5){
        break;
    }
    console.log(i);
    i++;
}
// In console
[Log] 0 (main.js, line 6)
[Log] 1 (main.js, line 6)
[Log] 2 (main.js, line 6)
[Log] 3 (main.js, line 6)
[Log] 4 (main.js, line 6)

//CONTINUE
let i = 0;
while(i<=10){
    // if(i===5){
    //     break;
    // }
    if(i%2 ===0){
        i++; 
        continue;
    }
    console.log(i);
    i++;
}
//In console
[Log] 1 (main.js, line 10)
[Log] 3 (main.js, line 10)
[Log] 5 (main.js, line 10)
[Log] 7 (main.js, line 10)
[Log] 9 (main.js, line 10)
```

> With the break keyword we jump out of a loop. With the continue keyword, we continue to another iteration.


## Exercise - Chapter 4

1. function that return the max of two number.

```javascript
function toMax(num1,num2){
    if(num1>num2){
         res = num1;
    }
    else{
         res = num2;
    }
    return res;
}
// in console
> toMax(123,500)
< 500
> toMax(600,500)
< 600

//OtherWay: conditional operator (ternary)
function toMax(num1,num2){
    return (num1>num2)? num1:num2;
}
```

2. Landscape or portrait.

```javascript
// we will get an answer
function Islandscape(width,height){
    return (width>height) ? "Landscape":"Portrait";
}
// in console
> Islandscape(500,10)
< "Landscape"
> Islandscape(5,10)
< "Portrait"

// More easy and Pro
function Islandscape(width,height){
    return (width>height);
}
//in console
> Islandscape(5,10)
< false
> Islandscape(500,10)
< true
```

3. The Fizz Buzz algorithm

- Number divisible by 3  = fizz.
- Number divisible by 5 = Buzz.
- Number divisible by 3 and 5 = fizzbuzz.
- else return same number.
- catch non-number error: NOt a number.

```javascript
function fizzbuzz(num){
    let answer;
    if(isNaN(num) || typeof(num)==='boolean'){
        throw Error("It's not a number");
    }
    else if(num%3 === 0 && num%5===0){
        answer = "fizzbuzz";
    }
    else if(num%3 === 0){
        answer = "fizz";
    }
    else if(num%5 === 0){
        answer = "buzz";
    }
    else{
        answer = num;
    }
    return answer;
}
// in console
> fizzbuzz(false)
< Error: It's not a number
> fizzbuzz(true)
< Error: It's not a number
> fizzbuzz('lelex')
< Error: It's not a number
> fizzbuzz(15)
< 15
> fizzbuzz(5)
< 5
> fizzbuzz(3)
< 3

// Mosh answer take.
// better way to do the if statement
if(typeof(num)!=='number')
// the code became

function fizzbuzz(num){
    let answer;
    if(typeof(num)!=='number'){
        throw Error("It's not a number");
    }
    else if(num%3 === 0 && num%5===0){
        answer = "fizzbuzz";
    }
    else if(num%3 === 0){
        answer = "fizz";
    }
    else if(num%5 === 0){
        answer = "buzz";
    }
    else{
        answer = num;
    }
    return answer;
}
```

4. Demerit points

- speed limits <= 70km -> ok
- 5km over the limit -> point: 1. Use Math.floor()
- [70,75[ -> ok
- 80 -> point: 2
- more 12 points -> license suspended. (>130)

```javascript
function checkspeed(speed){
    const speedlim = 70;
    const ppoint = 5;
    let ans;
    if(speed<75){  // speedlim+ppoint
        ans = "OK";
    }
    else{
        const point=Math.floor((speed-speedlim)/ppoint);
        if(point>=12){
            ans = "License suspended";
        }
        else{
            ans=console.log("Points:", point);
        }
    }
    return ans;    
}
// in console
> checkspeed(72)
< "OK"
> checkspeed(715)
< "License suspended"
> checkspeed(126)
[Log] Points: – 11 (main.js, line 14)
```

5. Even and ODD Number.

```javascript
function snum(limit){
    let ans;
    if(typeof(limit)!=='number'){
        throw Error('Please enter a number');
    }
    for(let i=0;i<limit;i++){
        if(i%2===0){
            ans=console.log(i+" Even Number");
        }
        else{
            ans=console.log(i+" ODD Number");
        }
    }
}
```

6. Count truthy

Create a function that count the truthy.

> Remember the list of FALSY value in javascript:

- false
- ''
- null
- undefined
- NaN
- 0

```javascript
function countruthy(arr){
    let n=0;
    for(let value of arr){
        if(value){ // if truthy
            n++ // the count will increment
        }
    }
    return  n;
}
```

7. Show strings properties in an object.

```javascript
const amen = {
    name: "Valerie",
    money: 30000,
    function:"Business Woman"
}

function spro(obj){
    let ans;
    for(let key in obj){
        if(typeof(obj[key])==="string"){
            ans = console.log(key,obj[key]);
        }
    }
    return ans;
}

// In console
> spro(amen)
[Log] name – "Valerie" (main.js, line 16)
[Log] function – "Business Woman" (main.js, line 16)
```

8. Some of Multiple of 3 or 5

```javascript
function mulsum(limit){
    let ans=0;
    for(let i = 0;i<=limit;i++){
        if(i%3===0||i%5===0){
            ans += i;
        }
    } // you must 
    return ans; // return the ans out of the loop 
}
// In console
> mulsum(10)
< 33
> mulsum(100)
< 2418
```

9. Calculate the average grade.

- return the grades of any given array
- 1-59: F
- 60-69:D
- 70-79: C
- 80-89: B
- 90-100: A

```javascript
let a = [90,90,90,80]

function ravgrds(grades){
    // grades is an array
    let notes="";
    let sum = 0;
    let deno = grades.length;
    let avg = 0;
    for(let g=0;g<grades.length;g++){
        sum += grades[g];
        avg = sum / deno;
    }
    if(avg<60){
        notes = "F";
    }
    else if(avg<70){
        notes="D";
    }
    else if(avg<80){
        notes="C"
    }
    else if(avg<90){
        notes="B"
    }
    else{
        notes="A"
    }
    return console.log(notes,avg);
}

ravgrds(a);
// console
[Log] B – 87.5 (main.js, line 28)


// better way
// your function shouldn't handle to much things.

let a = [90,90,90,80]
// average calculation
function calavg(aw){
    let sum=0;
    for(let val of aw ){
        sum+=val;
    }
    return sum/aw.length;
}
// grade system
function calgrades(score){
    const avg = calavg(score);
    if(avg<60){
        notes = "F";
    }
    if(avg<70){
        notes="D";
    }
    if(avg<80){
        notes="C"
    }
    if(avg<90){
        notes="B"
    }
    else{
        notes =  "A";
    }
    return notes;
}
console.log(calgrades(a),calavg(a));
[Log] B – 87.5 (main.js, line 35)
```

> For-of work well when we want the value not the index.

10. Show stars.

```javascript
function showstars(rows){
    let ans;
    for(let r=1;r<=rows;r++){
        let pat="";
        for(let i =0;i<r;i++){
            pat+="*";
        }
        ans = console.log(pat);       
    }
    return ans;
}

showstars(10);
// console
[Log] * (main.js, line 8)
[Log] ** (main.js, line 8)
[Log] *** (main.js, line 8)
[Log] **** (main.js, line 8)
[Log] ***** (main.js, line 8)
[Log] ****** (main.js, line 8)
[Log] ******* (main.js, line 8)
[Log] ******** (main.js, line 8)
[Log] ********* (main.js, line 8)
[Log] ********** (main.js, line 8)
```

11. Prime Numbers. 

- divide by 1 and themselves

```javascript
function showprime(limit){
    let ans;
    // 2 is first prime number
    for(let n=2;n<=limit;n++){ 
        let isprime = true;
        // 2 to current_number[n]
        for(let f=2;f<n;f++){
            if(n%f===0){
                isprime = false;
                break
            }
        } 
        if(isprime){
            ans = console.log(n);
        }
    }
    return ans;
}

showprime(10);
// console
[Log] 2 (main.js, line 14)
[Log] 3 (main.js, line 14)
[Log] 5 (main.js, line 14)
[Log] 7 (main.js, line 14)

// better way

function showprime(limit){
    let ans;
    // 2 is first prime number
    for(let n=2;n<=limit;n++){ 
        if(isprime(n)){
            ans = console.log(n);
        }
    }
    return ans;
}

function isprime(n){
    // 2 to current_number[n]
    for(let f=2;f<n;f++){
        if(n%f===0){
            return false;
        }
    }
    return true; 
}


showprime(10);
// console
[Log] 2 (main.js, line 6)
[Log] 3 (main.js, line 6)
[Log] 5 (main.js, line 6)
[Log] 7 (main.js, line 6)
```

## Chapter 3 : Objects

> For all the litterature for this chapter, we must reference the javascript OOP documentation

### basics

Put related variables inside an object

```javascript
const circle = {
    radius: 1,
    location: {
        x:1,
        y:2
    },
    isVisible:true,
    draw: function(){
        console.log('draw');
    }
};
// dot notation
// bracket notion

circle.draw();
```

Object Oriented Programming style of programming.

### Factory function and constructor function

```javascript
// Factory function
function createCercle(radius){
    return {
        // radius:radius,
        // for simplicity
        radius,
        // for simplicity you can do
        // draw() {console.log('draw')}
        draw: function(){
        console.log('draw');
        }
    };
}
const circle1 = createCercle(1);
```

Type of notation convention

- Camel Notation: ```abcDefgHijk```
- Pascal Notation: ```AbcDefgHijk```

Working with constructor function, you should work with camel notation.

```javascript
// constructor function
function Cercle(radius){
    this.radius = radius,
    this.draw: function(){
        console.log('draw');
    }
}
const circle2 = new Cercle(1);

// the new operator will create an empty object. The function will point the properties and methods to this empty objects.
```




