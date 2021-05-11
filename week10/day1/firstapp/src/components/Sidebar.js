import React, { Component } from "react";
import "../App.css"

export default class Sidebar extends Component {
  render() {
    return (
    <div className="sidebar">
    <nav>
  <ul>
    <li><span>Portfolio</span></li>
    <li><span>Email</span></li>
    <li><span>Github</span></li>
  </ul>
</nav>
    </div>
    );
  }
};
