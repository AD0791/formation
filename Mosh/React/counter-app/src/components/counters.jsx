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
