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
