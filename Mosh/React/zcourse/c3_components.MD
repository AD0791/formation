# React C.W.M: Chapter 3 (Components)

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
