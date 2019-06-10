---
output:
  html_document: default
  pdf_document: default
---

# React Course

---

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

## Chapter 3 : Components

let's create a new projects

```bash
Alexandros-MacBook-Pro:React alexandrodisla$ create-react-app counter-app

Creating a new React app in /Users/alexandrodisla/Desktop/repo/formation/Mosh/React/counter-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...


> fsevents@1.2.7 install /Users/alexandrodisla/Desktop/repo/formation/Mosh/React/counter-app/node_modules/chokidar/node_modules/fsevents
> node install

[fsevents] Success: "/Users/alexandrodisla/Desktop/repo/formation/Mosh/React/counter-app/node_modules/chokidar/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" is installed via remote

> fsevents@1.2.4 install /Users/alexandrodisla/Desktop/repo/formation/Mosh/React/counter-app/node_modules/fsevents
> node install

[fsevents] Success: "/Users/alexandrodisla/Desktop/repo/formation/Mosh/React/counter-app/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" already installed
Pass --update-binary to reinstall or --build-from-source to recompile
+ react-scripts@2.1.8
+ react@16.8.6
+ react-dom@16.8.6
added 1983 packages from 736 contributors and audited 36240 packages in 385.547s
found 63 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details

Success! Created counter-app at /Users/alexandrodisla/Desktop/repo/formation/Mosh/React/counter-app
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

  cd counter-app
  npm start

Happy hacking!
```

Launch the app:

> the second step is to go to the directory of the app and do `npm start`.

In vscode we are going to install bootstrap.

> Bootstrap: is essentially a css library that will gives our app a better look and feel.

```bash
$ cd React/counter-app/
$ npm i bootstrap
npm WARN ts-pnp@1.0.1 requires a peer of typescript@* but none is installed. You must in
stall peer dependencies yourself.
npm WARN bootstrap@4.3.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You
must install peer dependencies yourself.
npm WARN bootstrap@4.3.1 requires a peer of popper.js@^1.14.7 but none is installed. You
 must install peer dependencies yourself.

+ bootstrap@4.3.1
added 1 package from 2 contributors and audited 36241 packages in 71.886s
found 63 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
```

Now we need to import bootstrap in the index.js file.

```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// we import bootstrap.css
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

### first component of the project

In the src, we add a folder named components. our first file is counter.jsx for better code complition purposes.

Intall the snippet, simple react snippet for better code complition.

```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//bootstrap
import "bootstrap/dist/css/bootstrap.css";
// counter component
import Counter from "./components/counter";

// we replace the App.js
ReactDOM.render(<Counter />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

////////////////////////////////

// counter.jsx
import React, { Component } from "react";

class Counter extends Component {
  //state = {  }
  render() {
    return <h1>Hello World</h1>;
  }
}

export default Counter;
```

### Specifying Children

The div tag is the parent element. Babel will understand the code.

```javascript
import React, { Component } from "react";

class Counter extends Component {
  //state = {  }
  render() {
    // add a div tag that babel will understand
    return (
      <div>
        <h1>Hello World</h1>
        <button>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

```html
<div id="root">
  <div>
    <h1>Hello World</h1>
    <button>Increment</button>
  </div>
</div>
```

With this implementation, we ended up with a nested `<div>`.

but

```javascript
import React, { Component } from "react";

class Counter extends Component {
  //state = {  }
  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
```

```html
<div id="root">
  <h1>Hello World</h1>
  <button>Increment</button>
</div>
```

we have removed the nest to make it more cleaner.

### EMbedded Expressions

the State object includes any data that the component needs.

```javascript
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  // it's an important property
  render() {
    // {} to render something dynamcaly
    // bettween the {} wwe have an expression
    // an expression will return result
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }
  // to check the value of the count we need this method
  formatCount() {
    // object desconstruction
    const { count } = this.state;
    // check if it's 0
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
```

we can see how the html beahaves

```html
<div id="root">
  <span>Zero</span>
  <button>Increment</button>
</div>
```

The zero had been put dynamicaly.

### Setting Attributes

we started to find the simple way to add a random 200 by 200 images in our frontend.

```javascript
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // will generate a random 200X200 images
    imageUrl: "http://picsum.photos/200"
  };
  render() {
    // let's add an image dynamicaly
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="Random" />
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    // check if it's 0
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
```

Bootstrap classes in our jsx

```javascript
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0 //,
    //imageUrl: "http://picsum.photos/200"
  };
  render() {
    return (
      // <img src={this.state.imageUrl} alt="Random" />
      // bootstrap classes as attributes
      // we can't use class as attribute of the span
      // after the ClassName we pass 3 bootstrap classes
      // same logic for the button element
      <React.Fragment>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sml">Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    // check if it's 0
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
```

> Note that we use classes for performance and maintainability. But sometimes you may won't to break the rules and applied your style to a specific element.

Applying styles

```javascript
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0 //,
    //imageUrl: "http://picsum.photos/200"
  };

  //property of that syles object are css properties
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };
  render() {
    // applying styles
    // add a style attributes
    // and pass it's value dynamicaly
    return (
      <React.Fragment>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sml">Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    // check if it's 0
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
```

look at the html on the browser

```html
<div id="root">
  <span
    class="badge badge-primary m-2"
    style="font-size: 10px; font-weight: bold;"
    >Zero</span
  ><button class="btn btn-secondary btn-sml">Increment</button>
</div>
```

But if we don't want to apply styles to multiple tags
we can use inline styles.

```javascript
 render() {
    // applying styles inlines
    return (
      <React.Fragment>
        <span
          style={{ fontSize: 12, fontWeight: "bold" }}
          className="badge badge-primary m-2"
        >
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sml">Increment</button>
      </React.Fragment>
    );
  }
```

```html
<div id="root">
  <span
    class="badge badge-primary m-2"
    style="font-size: 12px; font-weight: bold;"
    >Zero</span
  ><button class="btn btn-secondary btn-sml">Increment</button>
</div>
```

### Rendering Classes Dynamically

Essentially here we have to understand that the bootstrap class `badge-primary` gives the blue color to our span. But when we hit the 0 (zero), we need the bootstrap class to change to '''badge-warning```. we will need to implemented this behavior dynamically.

```javascript
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0 //,
    //imageUrl: "http://picsum.photos/200"
  };
  render() {
    // one way to do it
    // play with strings
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sml">Increment</button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    // check if it's 0
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
```

Done

```javascript
<div id="root">
  <span class="badge m-2 badge-warning">Zero</span>
  <button class="btn btn-secondary btn-sml">Increment</button>
</div>
```

### Rendering Lists

we are going to map each element of an array to a react element. we need to specify a key attributes to
keep the dom in sinc with the virtual dom.

```javascript
 state = {
   count: 0,
   tags: ["tag1", "tag2", "tag3"]
 };
 render() {
   // map an array
   // use to render dynamically a list of items in react
   // keep the dom in sinc with the virtual dom
   // since our tags are not object it will be easy
   return (
     <React.Fragment>
       <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
       <button className="btn btn-secondary btn-sml">Increment</button>
       <ul>
         {this.state.tags.map(tag => (
           <li key={tag}>{tag}</li>
         ))}
       </ul>
     </React.Fragment>
   );
 }
```

```html
<div id="root">
  <span class="badge m-2 badge-warning">Zero</span
  ><button class="btn btn-secondary btn-sml">Increment</button>
  <ul>
    <li>tag1</li>
    <li>tag2</li>
    <li>tag3</li>
  </ul>
</div>
```

### Conditional Rendering

JSx is not a templating engine we don't have if and else.

We had to do nested div in this case lol

```javascript
state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };
  // conditional rendering
  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no renderTags</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      // render an additional
      // way 1 is the case of truthy and falsy
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sml">Increment</button>
        <div>
          {this.state.tags.length === 0 && "nOw we will render this message"}
          {this.renderTags()}
        </div>
      </React.Fragment>
    );
  }
```

```html
<div id="root">
  <span class="badge m-2 badge-warning">Zero</span
  ><button class="btn btn-secondary btn-sml">Increment</button>
  <div>
    <ul>
      <li>tag1</li>
      <li>tag2</li>
      <li>tag3</li>
    </ul>
  </div>
</div>
```

### Handeling Events

Properties based on simple doms events.
it's different from vanilla javascript. we don't to call the method dynamically but only it's reference.

```javascript
 // dom event
  handleIncrement() {
    console.log("Increment Clicked");
  }
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sml"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

// console output i will click it 3 times
> 3 counter.jsx:10 Increment Clicked
```

### Binding events handler

```javascript
constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  // dom event
  handleIncrement() {
    console.log("Increment Clicked", this);
  }
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sml"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

// output
Increment Clicked Counter {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}context: {}handleIncrement: ƒ ()props: {}refs: {}state: {count: 0}updater: {isMounted: ƒ, enqueueSetState: ƒ, enqueueReplaceState: ƒ, enqueueForceUpdate: ƒ}_reactInternalFiber: FiberNode {tag: 1, key: null, elementType: ƒ, type: ƒ, stateNode: Counter, …}_reactInternalInstance: {_processChildContext: ƒ}isMounted: (...)replaceState: (...)__proto__: Component

counter.jsx:13 Increment Clicked Counter {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}

counter.jsx:13 Increment Clicked Counter {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}
```

when i clicked the button 3 times, we will get the object 3 times. we had to bind the this to avoid it to point to the class counter.

We can set it to an arrow function to do the job:

```javascript
// constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // handleIncrement() {
  //   console.log("Increment Clicked", this);
  // }
  handleIncrement = () => {
    console.log("Increment Clicked", this);
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sml"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }
// same output when we clicked
```

### Updating the View

We have to explicitely tell react what we have changed.

Now each time i click the button the state of the span increment automaticaly.

```javascript
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sml"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    // check if it's 0
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
```

#### What happen when state changes

react has what we call a virtual dom. in our counter.jsx files. the virtual dom see tree elements. (as a tree) the div and 2 childrens: the span and button.

Now when the state changes. The virtual dom will have an image of the old and new state. react will compare them and figure out where the changes are.

### passing event arguments

A verifier

### Vidly projects

we will create an react project called vidly. we install 2 libraries. Bootstrap and font-awesome.

```bash
$ create-react-app vidly
$ npm i bootsrtap font-awesome
```

we need to import their css, we will do that in index.js.

```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// bootstrap and font-awesome
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

let's start the vidly ptoject with `npm start`.

> We want to make our page similar to the bootstrap starter tmeplate.

We have modify the app.js. Because the app file isn't jsx. the Html element dosn't fit right.

```javascript
import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main ClassName="container">
        <h1> Hello World </h1>{" "}
      </main>
    );
  }
}

export default App;
```

We will add a folder called services to our src directory.

### Building the Movie component (vidly)

When you are building a complexe project. You must start with the sample things. Remember that.

This is interesting i put a Movie class from movies.jsx with `<Movie/>`.

```javascript
// app.js
import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
// import the movie.jsx
import Movies from "./components/movies";

class App extends Component {
  render() {
    return (
      <main ClassName="container">
        <Movies />
      </main>
    );
  }
}

export default App;
```

```javascript
//movie.jsx
import React, { Component } from "react";

class Movies extends Component {
  state = {};
  render() {
    return <h2>Movies Component</h2>;
  }
}

export default Movies;
```

```html
<div id="root">
  <main classname="container"><h2>Movies Component</h2></main>
</div>
```

for now we just render a message.

> Next step we want to render a bootstrap table.

we will go to the documentation of [bootstrap](www.getbootstrap.com). And look at for bootstrap table.

Vscode will generate the tags with zen Coding:

- `table.table>thead>tr>th*4`
- `tbody>tr>td*4`

Remmeber the app.js:

```javascript
import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
// import the movie.jsx
import Movies from "./components/movies";

class App extends Component {
  render() {
    return (
      <main ClassName="container">
        <Movies />
      </main>
    );
  }
}

export default App;
```

the movies.jsx in the /src/components:

```javascript
import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies() // it's not a good practice yet
  };
  // like the format of the bootstrap table
  // we need to render the movies dynamically
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map(movie => (
            <tr>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Movies;
```

In the browser:

```html
<div id="root">
  <main classname="container">
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Terminator</td>
          <td>Action</td>
          <td>6</td>
          <td>2.5</td>
        </tr>
        <tr>
          <td>Die Hard</td>
          <td>Action</td>
          <td>5</td>
          <td>2.5</td>
        </tr>
        <tr>
          <td>Get Out</td>
          <td>Thriller</td>
          <td>8</td>
          <td>3.5</td>
        </tr>
        <tr>
          <td>Trip to Italy</td>
          <td>Comedy</td>
          <td>7</td>
          <td>3.5</td>
        </tr>
        <tr>
          <td>Airplane</td>
          <td>Comedy</td>
          <td>7</td>
          <td>3.5</td>
        </tr>
        <tr>
          <td>Wedding Crashers</td>
          <td>Comedy</td>
          <td>7</td>
          <td>3.5</td>
        </tr>
        <tr>
          <td>Gone Girl</td>
          <td>Thriller</td>
          <td>7</td>
          <td>4.5</td>
        </tr>
        <tr>
          <td>The Sixth Sense</td>
          <td>Thriller</td>
          <td>4</td>
          <td>3.5</td>
        </tr>
        <tr>
          <td>The Avengers</td>
          <td>Action</td>
          <td>7</td>
          <td>3.5</td>
        </tr>
      </tbody>
    </table>
  </main>
</div>
```

> Next step we need to put a delete button in each row

we will do more code zen:

- `button.btn.btn-danger.btn-sm`

We also need an handler for the **delete event**.

**It's always a good practice to see if the button is doing the action. We assure that the method is bind to the constructor. After that make the object log to the console.**

```javascript
class Movies extends Component {
  state = {
    movies: getMovies() // it's not a good practice yet
  };
  // we put the delete button
  // we need to handle the delete event
  // arrow function to bind this event handler to the constructor
  // we will pass an event argument
  handleDelete = movie => {
    console.log(movie);
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map(movie => (
            <tr>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  onClick={() => this.handleDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Movies;

// I click the message 3 times
// in the browser
{_id: "5b21ca3eeb7f6fbccd471815", title: "Terminator", genre: {…}, numberInStock: 6, dailyRentalRate: 2.5, …}dailyRentalRate: 2.5genre:

{_id: "5b21ca3eeb7f6fbccd471818", name: "Action"}numberInStock: 6publishDate: "2018-01-03T19:04:28.809Z"title: "Terminator"_id: "5b21ca3eeb7f6fbccd471815"__proto__: Object
movies.jsx:13

{_id: "5b21ca3eeb7f6fbccd471815", title: "Terminator", genre: {…}, numberInStock: 6, dailyRentalRate: 2.5, …}
movies.jsx:13 {_id: "5b21ca3eeb7f6fbccd471815", title: "Terminator", genre: {…}, numberInStock: 6, dailyRentalRate: 2.5, …}
```

We need to update the state of that component

```javascript
import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies() // it's not a good practice yet
  };
  // we put the delete button
  // we need to handle the delete event
  // arrow function to bind this event handler to the constructor
  // we will pass an event argument
  // set the key to each movie id
  // set the state
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  onClick={() => this.handleDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Movies;
```

We have delete multiples movies.

```html
<tbody>
  <tr>
    <td>Die Hard</td>
    <td>Action</td>
    <td>5</td>
    <td>2.5</td>
    <td><button class="btn btn-danger btn-sm">Delete</button></td>
  </tr>
  <tr>
    <td>Get Out</td>
    <td>Thriller</td>
    <td>8</td>
    <td>3.5</td>
    <td><button class="btn btn-danger btn-sm">Delete</button></td>
  </tr>
</tbody>
```

we have 2 movies left. The delete button work.

> next step we want some conditional rendering

what i looks before we want to refactor the code

```javascript
render() {
    if(this.state.movies.length===0) return <p>There are no movies in database</p>;
 return(
   <React.fragment>
    <p> Showing {this.state.movies.length} movies in the database</p>
```

After refactoring movies.jsx

```javascript
import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies() // it's not a good practice yet
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    // refactor with object deconstruction
    // object deconstruction logic
    // we took the length property of this.state.movies
    // and rename it count
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no movies in database</p>;

    return (
      <React.Fragment>
        <p> Showing {count} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
```

and we will add some padding in our index.css

```css
body {
  margin: 0;
  padding: 20px 0 0 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
```

> The result is beautiful. The message shows up after, we remove the movies in the table.

Sumarry:

- JSX : for describing the UI
- Rendering lists
- Conditional Rendering
- Handeling Events
- Updating the State

## Chapitre 4 : Composing Components

we will learn How to:

- Pass Data

- Raise and Handle Events

- Multiple Components in Sinc

- Functional Components

- Lifecycle Hooks

### Composing Components

React works as a tree. We will need to compose the multiple components that we will going to have in our applications.

Now will add a new components in our application (counters.jsx).

With counters.jsx we want to render a list of counters. Counters will be on top of counter.

```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import * as serviceWorker from "./serviceWorker";
//bootstrap
import "bootstrap/dist/css/bootstrap.css";
// Now counters component
import Counters from "./components/counters";

ReactDOM.render(<Counters />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

We will do a first implementation of the Counters.jsx

```javascript
import React, { Component } from "react";
// let's get the counter component
import Counter from "./counter";

class Counters extends Component {
  state = {};

  // div is going to be a wrapper for all our counters.
  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default Counters;
```

For a better implementation we will put an array of counter in the state. And we will render it back with the map method.

In Counter.jsx

```javascript
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    // id and initial value for each counters
    // the value property in the state isn't working yet
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  // div is going to be a wrapper for all our counters.
  render() {
    return (
      <React.Fragment>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
```

### Passing Data to components.

With the same method that we use to pass the id for our counters, we can pass the initial values for html elements.

Let's also talk about `props`.

```javascript
// counters.jsx
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  render() {
    return (
      <React.Fragment>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} selected={true} />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
```

We will log the `props` in counter.jsx

```javascript
// counter.jsx
mport React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    // show output of props
    console.log("Props: ", this.props);
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sml"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    // check if it's 0
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
// output of the console.log
Props:  Object
selected: true
value: 0
key: (...)
get key: ƒ warnAboutAccessingKey()
__proto__: Object
Props:  Object
selected: true
value: 0
key: (...)
get key: ƒ warnAboutAccessingKey()
__proto__: Object
Props:  Object
selected: true
value: 0
key: (...)
get key: ƒ warnAboutAccessingKey()
__proto__: Object
Props:  Object
selected: true
value: 0
key: (...)
get key: ƒ warnAboutAccessingKey()
__proto__: Object
Props:  Object
selected: true
value: 0
key: (...)
get key: ƒ warnAboutAccessingKey()
__proto__: Object
```

Every react component has a property called `props`. It's basicaly a plain javascript object that has the attributes that we set in counter components `<Counter key={counter.id} value={counter.value} selected={true} />`except for the id property. The id is a special attributes that exist uniquely for identifying elements.

Because of that we are going to modify the count property in our counter.jsx files. With the value of our Counter components in our counters.jsx files.

We don't need the selected attributes for now. If we just wrote `<Counter key={counter.id} value={counter.value} selected/>`. Selected would be set to `true` automaticaly.

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// Now counters component
import Counters from "./components/counters";

ReactDOM.render( < Counters / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// counters.jsx
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 10 },
      { id: 3, value: 100 },
      { id: 4, value: 1000 },
      { id: 5, value: 10000 }
    ]
  };

  render() {
    return (
      <React.Fragment>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;

// counter.jsx
import React, { Component } from "react";

class Counter extends Component {
  // we will get the props from our counter.jsx files
  // which is set on the COunter components
  // we rename the count to value
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sml"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    // check if it's 0
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
```

### Passing Children

we know that we use the javascript element called props to render html.

A real world example of the direction, we are taking here, is dialog boxes.

After the modification on the counters.jsx. We can see the changes on the console.

let's look at the fwe changes.

```javascript
// counter.jsx
render() {
    // lets see the props property now
    console.log(this.props);
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sml"
        >
          Increment
        </button>
      </React.Fragment>
  );
}

// counters.jsx
render() {
    return (
      // sometimes we wnat to pass more content
      <React.Fragment>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value}>
            <h4>Title</h4>
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

// Consol output

Object
children:
$$typeof: Symbol(react.element)
key: null
props: {children: "Title"}
ref: null
type: "h4"
_owner: FiberNode {tag: 1, key: null, elementType: ƒ, type: ƒ, stateNode: Counters, …}
_store: {validated: true}
_self: null
_source: {fileName: "/Users/alexandrodisla/Desktop/repo/formation/Mosh/React/counter-app/src/components/counters.jsx", lineNumber: 21}
__proto__: Object
value: 0
key: (...)
get key: ƒ warnAboutAccessingKey()
__proto__: Object

// 4 more Object outputed from the props
```

THe newly added children property is essentially a react element.

we can use the benefits of this prrops javasctipt object to render a hard coded html element

```javascript
// counter.jsx
render() {
    // let's render the children now
    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sml"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }
```

or we can render it dynamically

```javascript
//counters.jsx
render() {
    return (
      // Dynamically
      <React.Fragment>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value}>
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

// counter.jsx
render() {
    // let's render the children now
    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sml"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }
```

> THIS WAY IS RECOMMANDED as we probably are going to render complexe element. Neverthless, we have a lightweigth way of doing the same action.

```javascript
// counters.jsx
 render() {
    return (
      // We didn't kneed the children in this case.
      // let's use the attributes.
      <React.Fragment>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} id={counter.id} />
        ))}
      </React.Fragment>
    );
  }
}
// counter.jsx
render() {
    // let's render the children now
    return (
      <React.Fragment>
        <h4>Counter #{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sml"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }
```

### Debugging React Apps

React Developer Tools, for firefox and chrome, is an extension that we can use for debugging our react application.

In the case of safari and edge, it's a standalone application.

On the panel we can see the tree of our components.

`$r` we can see an instance of one of our components. We can work with any instance of our compenents

We can found `$0` also if we inspect more of the console. We interact with the dom. We can access any element on the dom.

```javascript
$r
Counter {props: {…}, context: {…}, refs: {…}, updater: {…}, state: {…}, …}

$r.render()
{$$typeof: Symbol(react.element), type: Symbol(react.fragment), key: null, ref: null, props: {…}, …}

$0
<body>...</body>
```

### Props and State

What's the difference between props and states

- props includes data that we put inside of our components.
- state include data that is private or local to that component.

The state is local and only accessible inside the given components. This local state is completely invisible to the other components.

> Sometimes a components don't have a state. It uses his data through a props.

Props is read-only. React doesn't allow to change any value or property of the props.

### Raising and Handeling events

Now we want to add a delete button to our web app.
We realize that in order to delete a counter, we must delete them from the arrays of counters in the counters.jsx files.

> The components that owns a piece of the state, should be the one modifying it.

In order for this to work, the counter component will raise an event "onDelete". THe counters component will handle this event. In other word, we need to implement the `handleDelete` inside the counters components.

As good practice we are trying to log in the console before wanting to update the state.

```javascript
//counters.jsx
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 10 },
      { id: 3, value: 100 },
      { id: 4, value: 1000 },
      { id: 5, value: 10000 }
    ]
  };
  // we will get this handleDelete through an event
  // raise on the counter component.
  handleDelete = () => {
    console.log("Raise the events");
  };
  render() {
    return (
      // our child component here is counter.jsx
      <React.Fragment>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
```

```javascript
// counter.jsx
import React, { Component } from "react";

class Counter extends Component {
  // we add the delete button
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    // let's render the children now
    // we remove the header:
    //<h4>Counter #{this.props.id}</h4>
    // we raise the onDelete events
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sml"
        >
          Increment
        </button>
        <button
          onClick={this.props.onDelete}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    // check if it's 0
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
```

Let's see how it behaves in our console and the react debugger console on our browser.

```javascript
// react debugger

// the 1 counter, we look at the state
Key"1"
Props
id:
1
onDelete:
fn()
value:
0

// in concole, we will hit a delete button 6 times
> 6 Raise the events
```

> We have raise the event in the child component counter and the parent component counters is handling that event.

### Update the State (counter-app)

Before we update the state, we want to make sure that we can log the counterID.

```javacript
// counter.jsx
render() {
    //<h4>Counter #{this.props.id}</h4>
    // we are making the id of the counter deleted
    // before updating the state.
  return (
    <React.Fragment>
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button
        onClick={this.handleIncrement}
        className="btn btn-secondary btn-sml"
      >
        Increment
      </button>
      <button
        onClick={() => this.props.onDelete(this.props.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </React.Fragment>
  );
}

// counters.jsx
// before updating the state.
handleDelete = counterid => {
  console.log("Raise the events", counterid);
};

render() {
    return (
      // our child component here is counter.jsx
      <React.Fragment>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          />
        ))}
      </React.Fragment>
    );
  }
}

// in console
Raise the events 1
Raise the events 2
Raise the events 3
Raise the events 4
Raise the events 5
```

Now we get the correct id. We can update the state.

IN our architecture, we have the counters.jsx first:

```javascript
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 10 },
      { id: 3, value: 100 },
      { id: 4, value: 1000 },
      { id: 5, value: 10000 }
    ]
  };
  // updating the state.
  // we want the counters except thte one with a given id
  // the key and value are the same { counters: counters }
  handleDelete = counterid => {
    const counters = this.state.counters.filter(c => c.id !== counterid);
    this.setState({ counters });
  };
  render() {
    return (
      // our child component here is counter.jsx
      <React.Fragment>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
```

And Our counter.jsx

```javascript
import React, { Component } from "react";

class Counter extends Component {
  // we add the delete button
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    //<h4>Counter #{this.props.id}</h4>
    // we are making the id of the counter deleted
    // before updating the state.
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sml"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    // check if it's 0
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
```

We can remark a behavior:

```html
<Counter
  key="{counter.id}"
  onDelete="{this.handleDelete}"
  value="{counter.value}"
  id="{counter.id}"
/>
```

**why do we have the `key` and the `id`.**

This `key` attributes is used internally by react. So we won't be able to access it in our counter component.

ANd the other problem reside in the fact that we will want to add more attributes. This will make our code messy. We need to implement different changes and our counters.jsx and counter.jsx.

let's look at the changes:

counters.jsx

```javascript
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 10 },
      { id: 3, value: 100 },
      { id: 4, value: 1000 },
      { id: 5, value: 10000 }
    ]
  };
  // we are going to create a counter object
  // set it as an attribute
  // now we can encapsulate the properties.
  handleDelete = counterid => {
    const counters = this.state.counters.filter(c => c.id !== counterid);
    this.setState({ counters });
  };
  render() {
    return (
      // our child component here is counter.jsx
      <React.Fragment>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
```

counter.jsx

```javascript
import React, { Component } from "react";

class Counter extends Component {
  // we add the delete button
  state = {
    value: this.props.counter.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    //<h4>Counter #{this.props.id}</h4>
    // we are making the id of the counter deleted
    // before updating the state.
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sml"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    // check if it's 0
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
```

### Single source of truth

We don't have a single source of truth yet.

let's look at an interesting behavior! with this code above, we added the reset button. On the react developper tools we can se that change has happen. But it didn't went to the dom.

```javascript
// counters.jsx
// A single source of truth situation
  // the handle reset
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterid => {
    const counters = this.state.counters.filter(c => c.id !== counterid);
    this.setState({ counters });
  };
  render() {
    return (
      // our child component here is counter.jsx
      <React.Fragment>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
```

```javascript
// react devs tools
/*counters:
Array[5]
0:
{…}
id:
1
value:
0
1:
{…}
id:
2
value:
0
2:
{…}
id:
3
value:
0
3:
{…}
id:
4
value:
0
4:
{…}
id:
5
value:
0 */
```

this problem occurs because the local state is not update. we can remove the local state to solve it.
And have the counter component has a single source of truth.

#### Removing the local state

we want to remove the local state in the `counter.jsx`. And only rely under props to recieve the data the component needs.

```javascript
state = {
    value: this.props.counter.value
  };
```

we refer to this kind of component. **The controlled component**. It control its own local state. Recieve his data via a props and raise his events when ever data needs to be changed.

Counter.jsx will be the controlled component.

```javascript
import React, { Component } from "react";

class Counter extends Component {
  // remove the local sate
  /*handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };*/
  render() {
    //<h4>Counter #{this.props.id}</h4>
    // we are making the id of the counter deleted
    // before updating the state.
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sml"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    // check if it's 0
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
```

We are relying on the props the allocate the data.

### Multiple components in sync

we are going to change the structure of the app right now.

- #index.js => app
- #app => N; Cters
- (navbar; counters) components
- counter component => controller component

We are going to replace the render method of the `app.js` with a basic bootstrap template.

we are going to create the `navbar.jsx` component.

> NOW

```javascript
// index.js
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

ReactDOM.render( < App / > , document.getElementById('root'));
```

```javascript
// APP.JS
import React, {
  Component
} from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
class App extends Component {
  render() {
    return ( <
      React.Fragment >
      <
      NavBar / >
      <
      main className = "container" >
      <
      Counters / >
      <
      /main> < /
      React.Fragment >
    );
  }
}

export default App;
```

```javascript
//navbar
mport React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      // <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
      </nav>
      //</React.Fragment>
    );
  }
}

export default NavBar;

```

> **The counters.jsx is allocating data via props to counter.jsx (controller component). App.js is handling the navbar and the counters. WE are also rendering the app.js in the index.js (root).**

We need to lift up the state, by that, the app.js will handle the allocation to navbar, counters and counter. because navbar and counters aren't parent/child or any kind of association.

### lifting up the state

we have modified a lot of the code.

we put the state on our `app.js`, given our app architecture.

```javascript
//APPjs
import React, {
  Component
} from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
class App extends Component {
  state = {
    counters: [{
        id: 1,
        value: 0
      },
      {
        id: 2,
        value: 10
      },
      {
        id: 3,
        value: 100
      },
      {
        id: 4,
        value: 1000
      },
      {
        id: 5,
        value: 10000
      }
    ]
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {
      ...counter
    };
    counters[index].value++;
    this.setState({
      counters
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters
    });
  };

  handleDelete = counterid => {
    const counters = this.state.counters.filter(c => c.id !== counterid);
    this.setState({
      counters
    });
  };
  render() {
    return ( <
      React.Fragment >
      <
      NavBar totalCounters = {
        this.state.counters.filter(c => c.value > 0).length
      }
      / > <
      main className = "container" >
      <
      Counters counters = {
        this.state.counters
      }
      onReset = {
        this.handleReset
      }
      onIncrement = {
        this.handleIncrement
      }
      onDelete = {
        this.handleDelete
      }
      / > < /
      main > < /
      React.Fragment >
    );
  }
}

export default App;
```

```javascript
// counters
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      // our child component here is counter.jsx
      <React.Fragment>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
```

```javascript
// counter and navbar
import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      // <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
      //</React.Fragment>
    );
  }
}

export default NavBar;


import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sml"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    // check if it's 0
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

```

Now the state is on the parent component

- app.js

the children component in association using `this.props`

- navbar and {counters, counter}

#### Stateless fonctional component

The Navbar is the perfect spot to implement a stateless functional componant.

```javascript
import React, { Component } from "react";

// Stateless functional Componant
// sfc
const NavBar = props => {
  return (
    // <React.Fragment>
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
    //</React.Fragment>
  );
};

/*
class NavBar extends Component {
  render() {
    return (
      // <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
      //</React.Fragment>
    );
  }
}
*/
export default NavBar;
```

### Destructuring Arguments

We are going to use object destructuring to handle our `props`.

```javascript
// navbar
const NavBar = ({ totalCounters }) => {
  return (
    // <React.Fragment>
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
    //</React.Fragment>
  );
};
```

It is implemented differently in the counters.jsx class.

```javascript
class Counters extends Component {
  render() {
    // destructuring the props
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      // our child component here is counter.jsx
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}
```

### Life Cycle Hooks

we have 3 life cycle in React

1. Mount

- constructor
- render
- componentDidMount

2. Update

- render
- componentDidUpdate

3. Unmount

- componentWillUnmount

### Mounting Phase

We are going to the top of our architecture `App.js`. Then we will implement our mounting phase.

```javascript
// APP.js
constructor() {
  super();
  console.log("APP - Constructor");
}

componentDidMount() {
    //ajax call
    // this.setState({new_data}) // receive new data
    console.log("App - mounted");
}
  
 
render() {
    console.log("APP render");
...}
/*
APP - Constructor
App.js:75 APP render
App.js:42 App - mounted
*?
```

render = virtual Dom situation of the component
mounted = Actual DOM situation of the component

**When a component is rendered, all his children are rendered recursively**

You can't use lyfe cycle hooks in a stateless functional component.

### Updating Phase

This phase happen when ever our states or props change.

WHen the component tree is rendered that doesn't mean the DOM is updated. We have essentially a react element, updating our virtual DOM.

WE ARE GOING TO ADD a life cycle in our controller component `counter.jsx`.

```javascript
// counter.jsx

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps ", prevProps);
    console.log("prevState ", prevState);
    /*if (prevProps.counter.value != this.props.counter.value){
      // ajax call
    }*/
  }
  ...
```

Based on on this life cycle we can decide whether or not to get ask from our server new data.

### Unmounting Phase

When we delete a counter the state just of the component just change.

We have a new virtual dom with one less counter. React will compare this virtual dom to the actual dom. ANd it will call `componentWillUnmount` before removing this counter.

This will gives us the opportunity to do some clean-up.

```javascript
componentWillUnmount() {
    console.log("Component unmount");
}
/*
APP render
counter.jsx:14 Component unmount
counter.jsx:6 prevProps  {onDelete: ƒ, onIncrement: ƒ, counter: {…}}
counter.jsx:7 prevState  null
counter.jsx:6 prevProps  {onDelete: ƒ, onIncrement: ƒ, counter: {…}}
counter.jsx:7 prevState  nul
*/
```

#### Exercise (Decrementation - Solution LIke component)

