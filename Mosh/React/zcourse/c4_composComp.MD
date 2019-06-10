# React C.W.M: Chapter 4 (Composing Components)

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
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

```javascript
// APP.JS
import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters />
        </main>{" "}
      </React.Fragment>
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
import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
class App extends Component {
  state = {
    counters: [
      {
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
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />{" "}
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />{" "}
        </main>{" "}
      </React.Fragment>
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
