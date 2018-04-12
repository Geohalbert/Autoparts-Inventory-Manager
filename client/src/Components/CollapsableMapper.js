import React, { Component } from "react";
import {Link} from "react-router-dom";

class CollapsableMapper extends Component {
  constructor() {
    super();
    this.state = {visible: true};
  }
  render() {
    let buttonText = "Hide";
    let userDivs = "";
    if (this.state.visible) {
      buttonText = "Hide";
      userDivs = this.props.data.map((d,i) => {
        return (
          <div key={i} id="post">
            {d[this.props.field]}
          <br />  {d[this.props.field1]}
          <br />  {d[this.props.field2]}
          <br />  {d[this.props.field3]}
            <Link to={"/" + this.props.path + "/" + d._id}> View </Link>
            <Link to={"/" + this.props.path + "/" + d._id}> Remove </Link>
          </div>
        );
      });
    } else {
      buttonText = "Show";
      userDivs = "";
    }
    return (
      <div>
        <button onClick={() => {
          this.setState({
            visible: !this.state.visible
          });
        }
        }>
          {buttonText}
        </button>
        {userDivs}
      </div>);
  }
}


export default CollapsableMapper;
