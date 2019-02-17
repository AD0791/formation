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