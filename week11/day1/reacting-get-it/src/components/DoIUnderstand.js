import React, { Component } from "react";

export default class DoI extends Component {
  constructor(props){
  super(props);

    this.state = {
      Do: "Let me think?"
    }
}



  render() {
    return (
      <div>
      <h2 style={{color: 'grey'}}>Do you understand what joe is showing you?</h2>
      <p>{this.state.Do}</p>
        <button onClick={() => this.setState({
          Do: "You Best Believe"
        })}>Yes</button>
        <button onClick={() => this.setState({
          Do: "Hell naw"
        })}>No</button>
        </div>
    );
    }
};
