# Node.JS

-------------

# Chapter 1: Getting Started

## What's Nodejs

> Node.js or Node is a runtime environment for executitng javascript code outside of a browser.

We use node to build back-end services often called API (Application Programming Interface).

N.B:

- web app run on a web browser
- mobile app run on a mobile
- client app = frontend
- Node is not a programming language
- Node is not a framework

### node's importance  

> Node is highly-scalable, data intensive and real-time apps.

- great for prototyping and agile development
- superfast and highly scalable
- Javascript everywhere 
- cleaner and more consistent codebase
- Large ecosystem of open source Library 

#### Paypal Experience 

> Node App

- Build twice as fast with fewer people
- 33% fewer lines of code
- 40% fewer files
- 2x request/sec
- 35% faster reponse time

## Node Architecture

Before node, we could only run javascript codes inside the web browser. Every web browser has a javascript engine. The engine has for role to convert the code to machine code. The engine of:

- Edge = Chakra
- Firefox = SiperMonkey
- Chrome = V8

> Node is a runtime environment for executing javascript code. Node is build with the V8 engine. Node offers more modules that gives it more capapbilities than a web browser.

## How node works

Node has a non-blocking or asynchronous architecture. A single tread  can work with 2 request. They are asynchronous by default.

> The Tread will not way for the execution of a query on the database. Instead it will take care of a new request. Then it will come back and handle the first request (when it finishes the query, the database will do a event queue and it act on it to serve the first client). 

N.B:

- The tread = allocated to a request.
- The tread make a query for the database to execute.

Important:

> Node is ideal for i/o-instensive apps. It should not be use for cpu-intensive apps.

## First Node Program

```javascript
function shello(name){
    console.log('Hello '+name);
}

shello('Lelex');

//console.log(window); Won't work. 
// we don't have the document or window as in the browser.
```

## Course structure

1. Node module system
2. NPM
3. REstful api with Express
4. Asynchronous javascript
5. Storing data in MongoDB
6. AUthentification and authorization
7. HAndeling and logging errors
8. Unit and integration testing
9. Test driven developpment
10. Deployment

# Chapter 2: Node Module System

## Global Object

```javascript
console.log(); // part of the Global Object.
// In fact
window.console.log(); // why
// window is the global object where this function
// is defined.

// In node we don't have this window object.
// The object is called global
global.console.log();
```

In a Browser:

> When we declare a function or a variable. They are added to the Global Scope: "Window".

In node:

> When we declare a function or a variable. They are added to the Global Scope: "Global".

## Modules 

It is not a very best practice to define a function or objects on the globale scope. Why?

> In a real world scenario, we are likely to work with multiple files. If we had declare two function with the same name. The second function will override the first declaration. So in order to maintain the application, it's best practice to work with modules to avoid this problem.

Every files in the node application is considered as a module. In object oriented programming we would say they are private.

Every node application has at least a file that we call the main module.

Let's look inside a module.

```javascript
console.log(module);
```

```bash
$ node app.js
Module {
  id: '.',
  exports: {},
  parent: null,
  filename:
   '/Users/alexandrodisla/Desktop/repo/formation/Mosh/Nodejs/first-app/app.js',
  loaded: false,
  children: [],
  paths:
   [ '/Users/alexandrodisla/Desktop/repo/formation/Mosh/Nodejs/first-app/node_modules',
     '/Users/alexandrodisla/Desktop/repo/formation/Mosh/Nodejs/node_modules',
     '/Users/alexandrodisla/Desktop/repo/formation/Mosh/node_modules',
     '/Users/alexandrodisla/Desktop/repo/formation/node_modules',
     '/Users/alexandrodisla/Desktop/repo/node_modules',
     '/Users/alexandrodisla/Desktop/node_modules',
     '/Users/alexandrodisla/node_modules',
     '/Users/node_modules',
     '/node_modules' ] }
     ```


















