import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './bottom.css'

export default class Bottom extends Component {
  render() {
    return (
      <div className='bot'>
        <a href="#"><FontAwesomeIcon className="cil" icon="pencil-alt" /></a>
      </div>
    );
    }
};
