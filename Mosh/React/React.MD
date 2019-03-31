---
output:
  pdf_document: default
  html_document: default
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
