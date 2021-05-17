import React, { Component } from "react";
// import House from '../src/components/house';
import './App.css';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      header: "This Is Going Great",
      vehicles: [
      {
          motorcycles:[
          {american:[ {
              name: "AmericanMoto",
              year: "08"
              }
              ]},
          {foreign: [{
            name: "ForeignMoto",
            year: "04"
          }]}
       ]
      },
      {
          exotic:[
          {american:[{
            name: "AmericeExCar",
            year: "13"
          }]},
          {foreign: [{
            name: "ForeignExCar",
            year: "18"
          }]}
       ]
      },
      {
          muscle:[
          {american:[{
            name: "AmericanMuscleCar",
            year: "00"
          }]},
          {foreign: [{
            name: "ForeignMuscleCar",
            year: "20"
          }]}
          ]
        }
      ]
    };


  }

  render() {
    const { header} = this.state;

    return (
      <>
      <h1>{header}</h1>
      </>
    );
}
}
