# React C.W.M: Chapter 1 (Getting Started)

## Chapter 1 : Getting started

React is a javascript library for building user interfaces.

> Components are essentially a piece of the UI.

The building process is about merging the multiple components to create a complexe Interface.

Every react application has a route component. It represent the entire application with other child component. So every application is a tree of component.

Every component is build like a javascript class.

```javascript
class tweet {
  state = {};
  render() {
    // react element
  }
}
```

THe react element is mapping the dom element. React keep a lightweight representation of the dom in memory. We no longer need to work with the dom api.

React reacts to state of changes.

> Angular vs React: They have similar components. But Angular is a framework for complete solution and React is a library. And react only take care of rendering the vue and making the vue is in sink with the state. That's why it has very small api to learn. When buildidng an application with react, we need to use other libraries for routing, calling http services and so on.

### Setup

- install nodejs
- [reactjs](https://reactjs.org/)
- `npm i -g create-react-app` // @tospecifyaversion
- Vscode extension: simple React snippet and Prettier code formatter (editor format on save = true).

### First react app

Let's create our first react app.

```bash
# with the terminal
$ create-react-app react-app
```

By running this command, react will install :

- Development server
- Webpack
- Babel
- and Etc.

All the configuration is done for you

```bash
Alexandros-MacBook-Pro:React alexandrodisla$ create-react-app react-app

Creating a new React app in /Users/alexandrodisla/Desktop/repo/formation/Mosh/React/react-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...


> fsevents@1.2.7 install /Users/alexandrodisla/Desktop/repo/formation/Mosh/React/react-app/node_modules/chokidar/node_modules/fsevents
> node install

[fsevents] Success: "/Users/alexandrodisla/Desktop/repo/formation/Mosh/React/react-app/node_modules/chokidar/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" is installed via remote

> fsevents@1.2.4 install /Users/alexandrodisla/Desktop/repo/formation/Mosh/React/react-app/node_modules/fsevents
> node install

[fsevents] Success: "/Users/alexandrodisla/Desktop/repo/formation/Mosh/React/react-app/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" already installed
Pass --update-binary to reinstall or --build-from-source to recompile
+ react-dom@16.8.5
+ react@16.8.5
+ react-scripts@2.1.8
added 1977 packages from 735 contributors and audited 36240 packages in 264.395s
found 63 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details

Success! Created react-app at /Users/alexandrodisla/Desktop/repo/formation/Mosh/React/react-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd react-app
  npm start

Happy hacking!
```

> `npm run eject` If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own. You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

Now let's start the application

```bash
Alexandros-MacBook-Pro:react-app alexandrodisla$ npm start

> react-app@0.1.0 start /Users/alexandrodisla/Desktop/repo/formation/Mosh/React/react-app
> react-scripts start

Compiled successfully!

You can now view react-app in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://172.20.10.9:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.
```

Inside the react-app we have 3 folders:

- node_modules: we have all the libraries that we need.
- public: the public assets of our application.
- src: we have our basics componant.

In our index.html, `<div id="root"></div>` this is the container for our react application.

We are now in our src files.

app.js

```javascript
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
```

> We have class named app that extend the Component class. In our render method, we have a bunch of html tags. There are called jsx or javascript xml. Babel will convert that jsx to compatible javascript for all browser.

let's see an example, we have enter on babeljs.io:

```javascript
const element = <h1>Hello world</h1>;

// babel conversion
("use strict");

var element = React.createElement("h1", null, "Hello world");
```

### Hello WOrld

We delete all the files inside the src directory. We are going to build evrything from scratch.

```javascript
// here we import an object from the module react
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1> Hello World </h1>;
console.log(element);

/////////
// this object is part of the reactdom element (virtual dom).
{$$typeof: Symbol(react.element), type: "h1", key: null, ref: null, props: {…}, …}$$typeof: Symbol(react.element)key: nullprops: {children: " Hello World "}ref: nulltype: "h1"_owner: null_store: {validated: false}_self: null_source: {fileName: "/Users/alexandrodisla/Desktop/repo/formation/Mosh/React/react-app/src/index.js", lineNumber: 5}__proto__: Object
///////////////
// this is an error
webpackHotDevClient.js:120 ./src/index.js
  Line 3:  'ReactDOM' is defined but never used  no-unused-vars
```

we import the react-dom to render the virtual dom to the real dom.

```javascript
// here we import an object from the module react
import React from "react";
import ReactDOM from "react-dom";

const element = <h1> Hello World </h1>;
console.log(element);
ReactDOM.render(element, document.getElementById("root"));
```

The hello world is render on our browser. Now if you go on the inspect element, we will see that in the index.html.

```html
<div id="root"><h1>Hello World</h1></div>
```

> In a real world application, we will render our app componant. (Tree of componant). With `npm run eject` it will create a config directory with all the depencies. The package.json will be different. use ejct if your are an advanced developer.

### Fullstack Architecture

The font-end and the backend interact with each other using the http protocole.

> React is a frontend library. Nodejs+express is for the backend.

### Course structure

1. Overview of javascript
2. Components (interaction)
3. Tables
4. Forms
5. Routing
6. Http Services
7. Auth
8. Deployment
