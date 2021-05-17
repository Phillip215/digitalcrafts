import React, { Component } from "react";

export default class Intro extends Component {
  constructor(props){
  super(props);

    this.state = {
      intro: "What up my Boy"
    }
}

  render() {
    return (
      <div>
        <h1>{this.state.intro}</h1>
      </div>
    );
    }
};
