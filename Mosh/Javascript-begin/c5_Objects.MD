# Javascript C.W.M: Chapter 5 (Objects)

## Chapter 5 : Objects

> For all the litterature for this chapter, we must reference the javascript OOP documentation

### basics

Put related variables inside an object

```javascript
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 2
  },
  isVisible: true,
  draw: function() {
    console.log("draw");
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
function createCercle(radius) {
  return {
    // radius:radius,
    // for simplicity
    radius,
    // for simplicity you can do
    // draw() {console.log('draw')}
    draw: function() {
      console.log("draw");
    }
  };
}
const circle1 = createCercle(1);
```

Type of notation convention

- Camel Notation: `abcDefgHijk`
- Pascal Notation: `AbcDefgHijk`

Working with constructor function, you should work with camel notation.

```javascript
// constructor function
function Cercle(radius) {
  (this.radius = radius),
    (this.draw = function() {
      console.log("draw");
    });
}
const circle2 = new Cercle(1);

// the new operator will create an empty object. The function will point the properties and methods to this empty objects.
```

### Dynamic Nature of programming

Even after the object has been created, you can add or remove properties and methods.

```javascript
function Cercle(radius){
    this.radius = radius,
    this.draw =  function(){
        console.log('draw');
    }
}
const circle2 = new Cercle(1);

// let's add property  and method
circle2.color = 'red';
circle2.fon = function(){};

console.log(circle2);

//in Console
[Log] Cercle {radius: 1, draw: function, color: "red", fon: function} (main.js, line 12)

// Let's remove property and method
delete circle2.radius;
delete circle2.fon;

console.log(circle2);

// in console
[Log] Cercle {draw: function, color: "red"} (main.js, line 17)
```

### Constructor Property

THe constructor property reference the function that was used to construct or create an object.

```javascript
function Cercle(radius){
    this.radius = radius,
    this.draw =  function(){
        console.log('draw');
    }
}
const circle2 = new Cercle(1);

console.log(circle2);


// In console
> circle2.constructor
< function Cercle(radius){
    this.radius = radius,
    this.draw =  function(){
        console.log('draw');
    }
}

// Cercle our constructor function
// Cercle has his own constructor
// Function() is the built-in COnstructor
> Cercle.constructor
< function Function() {
    [native code]
}
```

### Function are Objects

```javascript
function Cercle(radius) {
  (this.radius = radius),
    (this.draw = function() {
      console.log("draw");
    });
}
const circle2 = new Cercle(1);

// the Cercle function has built-in method or property
console.log(Cercle.name);
```

Use built-in construct

```javascript
// We can use the built-in function construct to
// build an object.
const Circle = new Function(
  "radius",
  `this.radius = radius,
    this.draw =  function(){
        console.log('draw');
    }`
);

const cerkle = new Circle(1);

console.log(cerkle);
```

### Value types and reference types

> Check OOP JS

### Enumerating Properties of an objects

YOu can'y use a for-of loop on an object. Objects aren't iterable.

```javascript
function Cercle(radius){
    this.radius = radius,
    this.draw =  function(){
        console.log('draw');
    }
}

const another = new Cercle(2);

// Enumerating properties and methods of an object
console.log(Object.keys(another));

for(let v in another){
    console.log(v,another[v]);
}

// this for-of will work though
for(let k of Object.keys(another)){
    console.log(k);
}

for(let k of Object.entries(another)){
    console.log(k);
}

// check

if('radius' in another){console.log('True')};

// in console
[Log] ["radius", "draw"] (2) (main.js, line 11)
[Log] radius – 2 (main.js, line 14)
[Log] draw – function (){ (main.js, line 14)
        console.log('draw');
    }
[Log] radius (main.js, line 19)
[Log] draw (main.js, line 19)
[Log] ["radius", 2] (2) (main.js, line 23)
[Log] ["draw", function] (2) (main.js, line 23)
[Log] True (main.js, line 28)
```

### Cloning an Object

Copy the keys into an empty objects

```javascript
function Cercle(radius){
    this.radius = radius,
    this.draw =  function(){
        console.log('draw');
    }
}

const another = new Cercle(2);



const copyC = {};

for(let k in another){
    copyC[k] = another[k];
}

console.log(another);
console.log(copyC);
// in console
[Log] Cercle {radius: 2, draw: function} (main.js, line 18)
[Log] {radius: 2, draw: function} (main.js, line 19)
```

Modern way to do it

```javascript
function Cercle(radius){
    this.radius = radius,
    this.draw =  function(){
        console.log('draw');
    }
}

const another = new Cercle(2);


const copyC = {};

Object.assign(copyC,another);

console.log(another);
console.log(copyC);
// in javascript
[Log] Cercle {radius: 2, draw: function} (main.js, line 15)
[Log] {radius: 2, draw: function} (main.js, line 16)
```

```javascript
function Cercle(radius){
    this.radius = radius,
    this.draw =  function(){
        console.log('draw');
    }
}

const another = new Cercle(2);


const copyC = {};
Object.assign(copyC,another);

const copcopy = Object.assign({color:"yellow"},another);

const cop = { ...another };

console.log(another);
// the copies
console.log(copyC);
console.log(copcopy);
console.log(cop);
// In console
[Log] Cercle {radius: 2, draw: function} (main.js, line 18)

[Log] {radius: 2, draw: function} (main.js, line 20)
[Log] {color: "yellow", radius: 2, draw: function} (main.js, line 21)
[Log] {radius: 2, draw: function} (main.js, line 22)
```

### Garbage Collection

In C or C++ when we create an object, we need to allocate and deallocate memory to it. In Javascript by the time, we create that object the memory will be allocated. Because javascript has a garbage collector.

> A garbage collector will look for the variable and the constant that are no longer used and deallocate their memory.

### Math Object

For mathematical calculation

> [Math object in Javascript](https://www.google.com/search?client=firefox-b-d&q=math+javascript)

### String

```javascript
// string primitive
const message = 'zobop';
// string object
const newMessage = new String('objecta');
// In console
> typeof message
< "string"
> typeof newMessage
< "object"

> message.length
< 5
> message.includes('o')
< true
> message[4]
< "p"
> message.startsWith('z')
< true
> message.endsWith('z')
< false
> message.indexOf('z')
< 0
> message.replace('p','t')
< "zobot"
// the message vairiable hasn't changed
> message
< "zobop"
```

However when we use the dot notation on a string primitive, internally the javascript engine wraps it with a string objects.

> [String object in javascript](https://www.google.com/search?client=firefox-b-d&q=string+javascript)

- look for the escape notation

### Template Literals

The template literals are indicated by the back-tick caractere.

```javascript
const message = 'zobop \n is a zo';

const nmess = `Zobop
is a new zo`;

// in console
> nmess
< "Zobop
is a new zo"
> message
< "zobop
 is a zo"
```

It's very useful if you want to send email in your application. No need for escape notation.

You can had string dynamically with a place holder with the template literals.

```javascript
let name = 'Jhon';

const mess = `${name} ${13+9}
is the right name`;

console.log(mess);

// in console
[Log] Jhon 22 (main.js, line 6)
is the right name
```

With the `${}` we can put any expression of function that produce a value.

> [Template Literals](https://www.google.com/search?client=firefox-b-d&q=template+literals+javascript)

### Date

> [Date objects](https://www.google.com/search?client=firefox-b-d&q=Date+javascript)

```javascript
const now = new Date();

// how to put string
const now1 = new Date(`May 11 2018 09:00`);

// the month start to 0 and finish to 11
const now2 = new Date(2018,4,11,9,0);

console.log(now);
console.log(now1);
console.log(now2);

// In console
[Log] Wed Mar 06 2019 14:09:51 GMT-0500 (EST) (main.js, line 9)
[Log] Fri May 11 2018 09:00:00 GMT-0400 (EDT) (main.js, line 10)
[Log] Fri May 11 2018 09:00:00 GMT-0400 (EDT) (main.js, line 11)

// format commonly use to put on web app
> now.toISOString()
< "2019-03-06T19:30:51.977Z"
```

## Chapter 5 - Exercise

1. Adress Object

```javascript
// street
// city
// zipcode
// showaddress

let address = {street:1, city:"P-au-P",zipcode:"ht6141"}


function showaddress(ad){
    for(let k in ad){
        console.log(k,ad[k]);
    }
}

showaddress(address);

// in console
[Log] street – 1 (main.js, line 11)
[Log] city – "P-au-P" (main.js, line 11)
[Log] zipcode – "ht6141" (main.js, line 11)
```

2. Factory and Constructor

```javascript
// showaddress

// object literal
let address = {street:1, city:"P-au-P",zipcode:"ht6141"}
// factory
function addres(s,c,z){
    return{
        s,
        c,
        z
    };
}
const loc =  addres(2,"Jacmel","56045");
// constructor
function Addre(res,loca,zip){
    this.res = res;
    this.loca = loca;
    this.zip = zip;
}
const lok = new Addre(3,'Cap-Haitien','0009');

// show addresss
function showAddress(ad){
    for(let k in ad){
        console.log(k,ad[k]);
    }
}

showAddress(address);
showAddress(loc);
showAddress(lok);

// In console
[Log] street – 1 (main.js, line 25)
[Log] city – "P-au-P" (main.js, line 25)
[Log] zipcode – "ht6141" (main.js, line 25)
[Log] s – 2 (main.js, line 25)
[Log] c – "Jacmel" (main.js, line 25)
[Log] z – "56045" (main.js, line 25)
[Log] res – 3 (main.js, line 25)
[Log] loca – "Cap-Haitien" (main.js, line 25)
[Log] zip – "0009" (main.js, line 25)
```

Constructor function should have pascal notation.

3. Object Equality

2 objects are equals.

```javascript

// object literal
let address = {street:1, city:"P-au-P",zipcode:"ht6141"}
// factory
function addres(s,c,z){
    return{
        s,
        c,
        z
    };
}
const loc =  addres(2,"Jacmel","56045");
// constructor
function Addre(res,loca,zip){
    this.res = res;
    this.loca = loca;
    this.zip = zip;
}
const lok = new Addre(3,'Cap-Haitien','0009');
const lok1  = new Addre(3,'Cap-Haitien','0009');

// Equal Objects
function eqObjects(ad1,ad2){
    let ans;
    for(let i in ad1){
        for(let j in ad2){
            if(ad1[i] === ad2[j]){
                ans = true;
            }
            else{
                ans = false;
            }
        }
    }
    return console.log(ans);
}

eqObjects(loc,lok);
eqObjects(loc,loc);
eqObjects(lok,lok1);

// in console
[Log] false (main.js, line 36)
[Log] true (main.js, line 36)
[Log] true (main.js, line 36)
```

But 2 objects are the same is different.

```javascript

/ constructor
function Addre(res,loca,zip){
    this.res = res,
    this.loca = loca,
    this.zip = zip
}
const lok = new Addre(3,'Cap-Haitien','0009');
const lok1  = new Addre(3,'Cap-Haitien','0009');

// Are the same
function aresame(a1,a2){
    return a1 === a2;
}

// in console
> aresame(lok,lok)
< true
> aresame(lok1,lok)
< false
```

> Two objects can be equals but they are two different objects in memory.

4. Blog post object

```javascript
let blogPost = {
  title: `my blog`,
  body: `body blog`,
  author: `Alex`,
  views: function viewS(log) {
    return log;
  },
  comments: [
    {
      author: `A viewer`,
      body: `Empty comment`
    },
    {
      author: `A viewer`,
      body: `Empty comment`
    }
  ],
  islive: true
};
```

A scenario for building a blogging engine

```javascript

// constructor function

function BlogPost(titre,auteur,body){
    this.titre = titre;
    this.auteur = auteur;
    this.body = body;
    // initialize
    this.views = 0;
    this.comments=[];
    this.islive = false;
}

let  post = new BlogPost(`Post`,`Lelex`,`Javascript is
a good programming language...`);

console.log(post);

// in console
[Log] BlogPost {titre: "Post", auteur: "Lelex", body: "Javascript is↵a good programming language...", views: 0, comments: [], …} (main.js, line 17)
> post.auteur
< "Lelex"
> post.body
< "Javascript is
a good programming language..."
```

5. Price range object

```javascript
let priceRange = [{
    label:'$',
    tooltip:'inexpensive'
    minprice: 5,
    maxprice: 49
},{
    label:'$$',
    tooltip:'expensive'
    minprice: 50,
    maxprice: 150
}],{
    label:'$$$',
    tooltip:'Very-expensive'
    minprice: 151,
    maxprice: 500
};
```

We had these 4 properties for filtering possibilities.
