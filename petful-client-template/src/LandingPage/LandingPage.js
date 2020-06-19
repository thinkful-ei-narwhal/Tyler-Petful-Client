import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

export default class LandingPage extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div className="landingpage">
        <h2>I want to adopt a...</h2>
        <Link to="/dogs">
          <img src={this.context.currentDog.imageURL} />
          <p>Dog</p>
        </Link>
        <Link to="/cats">
          <img src={this.context.currentCat.imageURL} />
          <p>Cat</p>
        </Link>
      </div>
    );
  }
}
