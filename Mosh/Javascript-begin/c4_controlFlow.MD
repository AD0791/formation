# Javascript C.W.M: Chapter 4 (Control Flow)

## Chapter 4: Control Flow

### COnditional Statements

IN javascript we have two type of conditional statements:

- if and else
- switch and case

#### If and Else

```javascript
// basics structure
if (condition) {
  // one or multiple
  statements;
} else if (anothercondition) {
  // one or multiple
  statements;
}
// we can have multiple else if
else if (yetanothercondition) {
  // one or multiple
  statements;
} else {
  // if nun of the previous condition are true
  // one or multiple
  statements;
}
// what we call condition here is a mixed of expression and operators.
```

A practical example:

```javascript
let hour = 22;

if (hour >= 6 && hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour <= 18) {
  console.log("Good Morning");
} else {
  console.log("Good Evening");
}
```

#### Switch and case

```javascript
let variable;

switch (variable) {
  case "value":
    statements;
    break;
  // Multiple case
  case "value2":
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
for (initializexpr; condition; incrementexpr) {
  // this loop will run as long as the condition will evaluate to true.
  statements;
}
```

Incrementation

```javascript
// i is the loop varaible
for (let i = 0; i < 5; i++) {
  console.log("Hello World");
}
```

```javascript
for (let i = 0; i < 5; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
```

Decrementation

```javascript
for (let i = 5; i >= 0; i--) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
```

#### While Loop

In for loops, the lopp variable is part of the loop itself. In a while loop you have to declare this variable externally.

```javascript
// firt the loop variable
let lvar;
while (conditon) {
  statements;
}
```

We will make a while loop equivalent to the previous for loop.

```javascript
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) {
    console.log(i);
    i++;
  }
}

let i = 5;
while (i >= 0) {
  if (i % 2 !== 0) {
    console.log(i);
    i--;
  }
}
```

#### DO While loop

Do not make this mistake!

```javascript
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) {
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
do {
  staements;
} while (condition);
```

Do while loop are always at least executed once. even if the condition is evaluate to false.

```javascript
let i = 0;
do {
  if (i % 2 !== 0) {
    console.log(i);
    i++;
  }
} while (i <= 5);
// this code will be well executed.

// Now let put an error in the logic
let i = 9;
do {
  if (i % 2 !== 0) {
    console.log(i);
    i++;
  }
} while (i <= 5);
// the console will return 9. becuz it's an odd number. The do will be execute. but the while condition is not correct.

// If you used a while loop:
let i = 9;
while (i <= 5) {
  if (i % 2 !== 0) {
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
while (i < 0) {
  console.log(i);
  // This will create an infinite loop
  //i++; we forget to increment
}
// you can have infinite loop with
// do while, for loops
```

- You can't write `while(true)`.
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

- Number divisible by 3 = fizz.
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
function snum(limit) {
  let ans;
  if (typeof limit !== "number") {
    throw Error("Please enter a number");
  }
  for (let i = 0; i < limit; i++) {
    if (i % 2 === 0) {
      ans = console.log(i + " Even Number");
    } else {
      ans = console.log(i + " ODD Number");
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
function countruthy(arr) {
  let n = 0;
  for (let value of arr) {
    if (value) {
      // if truthy
      n++; // the count will increment
    }
  }
  return n;
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
