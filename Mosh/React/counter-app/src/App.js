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