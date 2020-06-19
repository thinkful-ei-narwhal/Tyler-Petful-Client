import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/dogs">
          <p>Dog</p>
        </Link>
        <Link to="/cats">
          <p>Cat</p>
        </Link>
      </div>
    );
  }
}
