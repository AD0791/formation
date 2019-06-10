# Javascript C.W.M: CHapitre 3 (Operators)

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
console.log(x + y);
//x+y is an expression.
// An expression is a piece of code that produce a value.
console.log(x - y);
console.log(x / y);
console.log(x * y);
console.log(x % y); // modulo
console.log(x ** y); // exponantiel

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
x = x + 5;
x += 5;
x = x * 3;
x *= 3;
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
console.log(x > 0);
console.log(x < 0);
console.log(x >= 0);
console.log(x <= 0);
//equality
console.log(x === 100);
console.log(x !== 100);
//logical
console.log(x > 0 && x < 101); // a et b
console.log(x > 0 || x > 100); // a ou b
```

> The result of an expression that include comparison operator is a boolean (true or false).

### Equality operator

> The strict equality operator insures to us that both side have the same type and value.  
> The lose equality operator doesn't care about the types machine. If the types aren't the same, it will convert the type we have on the right side to match what we have on the left side. And then it will check if the values are equal.

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
console.log(true && true);
// is true, only in this case.
// maths a et b (logic matrix)
console.log(true || false);
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
false || "a";
// javascript will evaluate "a"
// "a" is not an empty string so
//"a" is truthy and will be return
false || 1;
// 1 is a truthy and will be return

// short-circuting
false || 1 || 2;
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

let x = 2 + 3 + 4 * 3;
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
b = c;

console.log(a);
console.log(b);
```
