import React, { Component } from "react";
// life cycle hooks

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps ", prevProps);
    console.log("prevState ", prevState);
    /*if (prevProps.counter.value != this.props.counter.value){
      // ajax call
    }*/
  }

  componentWillUnmount() {
    console.log("Component unmount");
  }
  render() {
    return (
      <React.Fragment className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sml"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sml m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
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
