import React, { Component } from "react";

export default class Con extends Component {
  constructor(props){
  super(props);

    this.state = {
      todo: "Word"
    }
}

  render() {
    return (
      <div>
        <p>{this.state.todo}</p>
        <input></input>
      </div>

    );
    }
};
