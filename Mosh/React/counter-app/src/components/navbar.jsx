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
