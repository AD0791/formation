# React C.W.M: Chapter 2 (Javascript Refresher)

## Chapter 2 : Javascript refresher

we are going to add the script and the result here. Why? I already cover the javascript and the oopjs.

1. Let vs Var

We know that the `Var` send it to the window object. Or it accessible from the Window Object. The `Let` variable keep it accessible from the scope where it was defined.

2. Objects

- collection of key valuer pairs
- factory function
- constructor function
- dot notation vs bracket notation

3. The `this` keywords

In c# or java, `this` always return the reference of that object. This keyword behave differently in javascript.

we can use the bind method to point to the object.

```javascript
const person = {
  name: "DIsla",
  walk() {
    console.log(this);
  }
};

person.walk(); // will output the object person.
// because of this.

const walk = person.walk.bind(person);
walk();
// now because of the binding the walk will not
// output the window object.
```

4. Arrow function

Great features on es6. Good work around for the this method.

5. The map method for Arrays

Everytime we want to render list items, we should use the map method.

6. Object destructing

````javascript
const address = {
  street: "pernier 23",
  city: "PauP",
  country: "Haiti"
};

// unclean way
const street = address.street;
const city = address.city;
const country = address.country;

// a equivalent way
const { street, city, country } = address;

// if the name is different from the key
const { street: st } = address;
// the name of the object is ```st``` and is getting the street property.
````

7. The spread operator

- case we are using arrays, objects
- case for multiple args

8. Classes

ES6 great feature

9. Inheritance

- composition vs inheritance

10. Modules

`import { theclass } from './namefile'`

11. Named And Default Exports

we can export one or more objects from a modules. yes we know that classes in javascript are objects.

```javascript
// person.js
export class Person {
  constructor(name) {
    this.name = name;
  }
}
// teacher.js
import { Person } from "./person";

export function promote() {
  console.log("named exports");
}

export default class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("will be on the prototypes");
  }
}
// index.js
// we don't need the {} because Teacher is the default exports.
import Teacher from "./teacher";

const tea = new Teacher();
tea.teach(); // we will get the log in console

// but we can access an exported function from any modules.

import { promote } from "./teacher";

// good practice
// pattern largely use our backend tech
import Teacher, { promote } from "./teacher";
```

- named export: `import {nameofObjects} from './dir'`
- default export: `import nameObjects from './dir'`
