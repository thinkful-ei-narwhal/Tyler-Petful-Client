import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <h1>Petful</h1>
        <h2>Creating Happy Pet Families since 2020</h2>

        <img
          className="adoptImg"
          alt="adoption logo"
          src="https://www.humanesocietymiami.org/wp-content/uploads/2020/04/Adopt-a-shelter-pet-today_dog-2000px.jpg"
        />

        <p>Adopt of a furry friend on a first-come, first-serve basis! </p>
        <p> Enter your name, and when it is your turn, you may adopt.</p>
        <p> We hope to find all our friends a home!</p>

        <h3>Adopt Here!</h3>
        <Link className="Enter" to="/adopt">
          Enter
        </Link>
      </Fragment>
    );
  }
}

export default LandingPage;
