import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './top.css'
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

export default class Top extends Component {
  render() {
    return (

      <div className="con">
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Store</a></li>
        </ul>
        <ul>
          <li><a href="#">Gmail</a></li>
          <li><a href="#">Images</a></li>
          <li><a href="#"><FontAwesomeIcon className="lip" icon="ellipsis-v" /><FontAwesomeIcon className="lip" icon="ellipsis-v" /><FontAwesomeIcon className="lip" icon="ellipsis-v" /></a></li>
        </ul>

      </div>

    );
    }
};
