import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './middle.css'


export default class Middle extends Component {

  render(element) {
    return (
      <>
      <div className='tain'>
        <h1>Google</h1>
      </div>
      <div className="tain">
        <FontAwesomeIcon className="glass" icon="search" />
        <input type="text" placeholder="Search Google or type a url "></input> <FontAwesomeIcon className="mic" icon="microphone" />

      </div>
      </>
    );
    }
};
