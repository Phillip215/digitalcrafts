import React, { Component } from "react";
import './card.css'

export default class Card extends Component {
  render() {
    // console.log(this.props.pokemon)
    const {hp, name, sprites} = this.props.pokemon
    return (
      <div className='con'>
        <div className='style'>
        <img src={ sprites.front} alt="hmm" />
        <h2>{name}</h2>
        <h3>{hp} HP</h3>
        </div>
      </div>

    );
    }
};
