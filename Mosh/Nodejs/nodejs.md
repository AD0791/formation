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

> The Tread will not wait for the execution of a query on the database. Instead it will take care of a new request. Then it will come back and handle the first request (when it finishes the query, the database will do a event queue and it act on it to serve the first client). 

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

##  creating and loading modules

In the my first app file, we had the logger.js to build a sort of log system. We want to export that logger.js into the app.js as a module. Earlier we saw that the module object is a json. In that json we can see the key 'export' who has an empty object literal.  

```javascript
let url= "http://mylogger.io/log"; // Private

function log(message){
    console.log(message);
}

module.exports.log = log; 
// we can access the function log in the
// app.js. In node = files are modules.
// if we want to export the url (endpoint)
// url is emplementation detail
// module.exports.endpoint = url;
```

Let's see the content of module.exports object literal.

```javascript
const logger = require("./logger"); 
// best practice to use "const"
// require function help access the logger.js modules.

console.log(logger);
```

```bash
$ node app.js
{ log: [Function: log] }
```

We can access the log function (similar to an OOP =  method).

```javascript
const logger = require("./logger");

console.log(logger);

logger.log("AD0791");
// we can use the function created in logger.js
```

```bash
$ node app.js
{ log: [Function: log] }
AD0791
```

> WIth npm i have install jshint on the terminal. Jshint will prevent mistakes on the writting of the code.

We can access the log fonction directly without creating a log object like this.

```javascript
// logger.js
let url= "http://mylogger.io/log"; // Private

function log(message){
    console.log(message);
}

module.exports= log; 

// app.js
const logger = require("./logger");

console.log(logger);

logger("AD0791");
// we can use logger as afunction now
```

```bash
$ node app.js
[Function: log]
AD0791
```

## Module Wrapper

The  functions or variables, define in a module, are scope to that module. They are not visible from the outside.

```javascript
// let's create a mistake on the logger.js
let x=; // errata
let url= "http://mylogger.io/log"; // Private

function log(message){
    console.log(message);
}

module.exports= log; 
//
//app.js
const logger = require("./logger");

console.log(logger);

logger("AD0791");
```

We will see the wrapper function node use to read the codes inside our modules.

```bash
# we will see the syntax error
SyntaxError: Unexpected token ;
    at new Script (vm.js:79:7)
    at createScript (vm.js:251:10)
    at Object.runInThisContext (vm.js:303:10)
    at Module._compile (internal/modules/cjs/loader.js:656:28)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
    at Module.load (internal/modules/cjs/loader.js:598:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
    at Function.Module._load (internal/modules/cjs/loader.js:529:3)
    at Module.require (internal/modules/cjs/loader.js:636:17)
    at require (internal/modules/cjs/helpers.js:20:18)
####
# we will see the head of the wrapper function
$ node app.js
/Users/alexandrodisla/Desktop/repo/formation/Mosh/Nodejs/first-app/logger.js:1
# There is the wrapper function with the mistake
(function (exports, require, module, __filename, __dirname) { let x=;
```

- **__filename** indicate file path and name.
- **__dirname** indicate the dir path and name. 

```javascript
// app.js
const logger = require("./logger");

console.log(logger);

logger("AD0791");
//
//logger.js
// these are inside the Node module wrapper function
console.log(__filename); 
console.log(__dirname);

let url= "http://mylogger.io/log"; // Private

function log(message){
    console.log(message);
}

module.exports= log;
```

```bash
$ node app.js
/Users/alexandrodisla/Desktop/repo/formation/Mosh/Nodejs/first-app/logger.js
/Users/alexandrodisla/Desktop/repo/formation/Mosh/Nodejs/first-app
[Function: log]
AD0791
```

Node itself come with a bunch of useful modules

## Path Module

Node have a list of built-in objects and modules. 
YOu can find the exhuasting list in the [Node Website](https://nodejs.org/en/docs/). YOu will click on the latest version.

For example:

- file system: to work with files
- HTTP: to create web server
- OS: to work wit operating system
- path: gives us a bunch of utility function for working with paths
- process: to gives information about the current process
- QueryStrings: which is very useful in building http services
- stream: to work with streams of data


Let's work the path module:

```javascript
// Import the built-in Path module
const path = require('path');

let pobject = path.parse(__filename);

console.log(pobject);
```

```bash
$ node app.js
{ root: '/',
  dir:
   '/Users/alexandrodisla/Desktop/repo/formation/Mosh/Nodejs/first-app',
  base: 'app.js',
  ext: '.js',
  name: 'app' }
```

  to see the avalaible modules:

  ```bash
$ ls node_modules
inherits        path            process         util
```















