import React, { Component } from "react";
// destructuring the props
// Stateless functional Componant
// sfc
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

export default NavBar;
