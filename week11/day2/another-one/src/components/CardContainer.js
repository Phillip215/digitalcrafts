import React, { Component } from "react";
import Card from './Card'
import './cardcon.css'

export default class CardContainer extends Component {

  state = {
    name: '',
    hp: '',
    frontUrl: '',
    pokemonList: [],
    id: '',
    searchCriteria: '',
  }

  inputValueHandler= (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  componentDidMount() {
    this.setState({
      pokemonList: this.props.pokemonData[0].pokemon,
    });
  }

  handleSubmit= (event) => {
    event.preventDefault();
    const {
      id,
      name,
      hp,
      frontUrl,
    } = this.state;
    const create = {
      id,
      name,
      hp,
      sprites: {
      front:frontUrl,
      },
    };
    this.props.pokemonData[0].pokemon.unshift(create)
    console.log(this.props.pokemonData[0].pokemon)

  }

    searchCriteria = (event) =>{
      this.setState({
        searchCriteria:event.target.value
      })
    }

    render() {
    const {pokemonData} = this.props
    // const poke = pokemonData[0].pokemon
    const filteredData = pokemonData[0].pokemon.filter(pokemon => pokemon.name.includes(this.state.searchCriteria))
    return (
      <div className='space'>
        <div>
        <input type='text' placeholder='Poke Search' onChange={(e)=> this.searchCriteria(e)} />

        <form onSubmit={this.handleSubmit}>

        <input className="create-field" name="name" type="text" value={this.state.pokeName} onChange={this.inputValueHandler} placeholder="Enter a Name"/>

        <input className="create-field" name="hp" type="text" value={this.state.value} onChange={this.inputValueHandler} placeholder="Enter a HP"/>

        <input name='frontUrl' type='text' value={this.state.value} onChange={this.inputValueHandler} placeholder='Place sprite here'></input>

        <button className="create-button" type='submit'>Create</button>
        </form>

        {filteredData.map((singlePokemon,index) => <Card key={singlePokemon.name}  pokemon={singlePokemon}  />
          )}
        </div>
      </div>

    );
    }
};
