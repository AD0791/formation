import React, { Component } from "react";
// As input
// liked = boolean
// will raise
// As output
// onClick event
// this component is responsible for rendering empty or full heart
// class Like extends Component {
//   //state = {  }
//   render() {
//     let coeur = "fa fa-heart";
//     if (!this.props.liked) coeur += "-o";
//     // onClick here is a custom event not a DOM event
//     return (
//       <i
//         onClick={this.props.onClick}
//         style={{ cursor: "pointer" }}
//         className={coeur}
//         aria-hidden="true"
//       />
//     );
//   }
// }

// SFC
const Like = props => {
  let coeur = "fa fa-heart";
  if (!props.liked) coeur += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={coeur}
      aria-hidden="true"
    />
  );
};

export default Like;
