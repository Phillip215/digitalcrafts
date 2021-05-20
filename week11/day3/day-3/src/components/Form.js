import React, { Component } from "react";
import '../App.css'

export default class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    Street: '',
    Apt: '',
    Postal: '',
    City: '',
    Country: '',
    State: '',
    Phone: '',
  }

  handleInputValues= (event) => {
    // console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  handleSubmit= (e) => {
    e.preventDefault();
    // console.log(Object.values(e.target))
    const {
      firstName,
      lastName,
      Street,
      Apt,
      Postal,
      City,
      State,
      Phone,
      Country,
    } = this.state;
    const Submission = {
      username: firstName + lastName,
      address:
      Street + " " + Apt + " " + Postal + " " + City + " " + State + " " + Country
    }
  }

  render() {
    return (
      <div className="App">
      <h1>Forms React</h1>
      <div className='extra'>

      <form action="" className='form' onSubmit={this.handleSubmit
      }>

        <input type='text' name="firstName" placeholder='First Name'
        value={this.state.firstName} onChange={this.handleInputValues
        }></input>

        <input type='text' name='lastName' placeholder='Last Name'
        value={this.state.lastName} onChange={this.handleInputValues}></input>

        <input type='text' name='Street' placeholder='Street Address'
        value={this.state.Street} onChange={this.handleInputValues}></input>

        <input type='text' placeholder='Apt, Suite' name='Apt'
        value={this.state.Apt} onChange={this.handleInputValues}></input>

        <input type='text' placeholder='Postal Code' name='Postal'
        value={this.state.Postal} onChange={this.handleInputValues}></input>

        <input type='text' placeholder='City' name='City'
        value={this.state.City} onChange={this.handleInputValues}></input>

        <input type='text' placeholder='Sate' name='State'
        value={this.state.State} onChange={this.handleInputValues}></input>

        <input type='text' placeholder='Country' name='Country'
        value={this.state.Country} onChange={this.handleInputValues}></input>

        <input type='text' placeholder='Phone-Number' name='Phone'
        value={this.state.Phone} onChange={this.handleInputValues}></input>
        < br></br>
        <input type='submit' className='button' placeholder='Submit'></input>

      </form>

      </div>
    </div>
    );
    }
};
