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
