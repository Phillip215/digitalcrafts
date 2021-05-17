import React, { Component } from "react";

export default class Class extends Component {
  constructor(props) {
    super(props)
    // the point of using the constuctor in react is to intialize your state
    this.state = {
      // state is a container that holds sata, and let's us have access to it
      count: 0
    }
  }

  // setState allows you to access the sate object

  render() {
    return (
      <div>
        <h1>Class.js</h1>
        <p>count is {this.state.count}</p>
        <button onClick={() => this.setState({
          count: this.state.count + 1
        })}>Add</button>
        <button onClick={() => this.setState({
          count: this.state.count - 1
        })}>Sub</button>
      </div>
    );
    }
};
