# Object Oriented Programming: Javascript

----------------------

## Chapter 1: Getting Started

### What's OOP?

> OOP is a programming paradigm (style of programming)centered around objects rather than functions.  OOP is not a programming language or a tool.

Languages that support OOP:

- C/C++  
- C#  
- Java  
- Ruby  
- Python  
- Javascript 
- R, PHP, ... 

The (popular) frameworks are designed with OOP concepts (for example Angular).

### 4 Pillars of OOP

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

### Course Structure

- Objects
- Prototypes
- Prototypical Inheritance
- ES6 Classes
- Modules

## CHapter 2: Objects

