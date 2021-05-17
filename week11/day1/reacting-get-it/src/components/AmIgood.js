import React, { Component } from "react";

export default class Am extends Component {
  constructor(props){
  super(props);

    this.state = {
      AmI: "Maybe"
    }
}


  render() {
    return (
      <div>
        <h2>Am I Good though?</h2>
        <p>{this.state.AmI}</p>
        <button onClick={() => this.setState({
          AmI: "Yup"
        })}>Yup</button>
        <button onClick={() => this.setState({
          AmI: "Nope"
        })}>Nope</button>
      </div>
    );
    }
};
