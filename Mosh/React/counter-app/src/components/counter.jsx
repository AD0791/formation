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
