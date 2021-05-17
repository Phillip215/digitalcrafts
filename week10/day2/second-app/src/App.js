import './App.css';
import React, { Component } from "react";

export default class App extends Component {
  // create the constructor (props)
  // Invoke super inside of the constructor, pass it props as an argument
  // define this.state={}
    constructor(props) {
      super(props);

    // state managment

    // the process of components passing data to each other is called props

    // the process of a component managing it's own data
    // and preserving it in a holding space, temporarily
    // this is called state managment
    // intializing state

      this.state = {
        counter: 0,
        title: "State Stuff",
        Itsgonrain: true,
      };
      // this.setState is a built in function to manipulate any state variable
      // you will only use it to change state
    }

    render() {
      const { title, Itsgonrain } = this.state

      return (
        <div className="App">
      <h1>State Stuff</h1>
      <p>{title}</p>
      <p>
        Is it gon rain?{" "} {Itsgonrain ? (
          <div>
          <p>YUPPPPPP</p>
        </div>
        ) : (
          <div>
            <p>NOPPPPEEE</p>
          </div>)}
        </p>
          <p>Count {this.state.counter}</p>

        <button onClick={() =>
        this.setState({
          counter: this.state.counter + 1,
        })
        }>Add</button>
        <button onClick={() =>
        this.setState({
          counter: this.state.counter - 1,
        })
        }>Subtract</button>
        </div>
      )
  }
};
