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
