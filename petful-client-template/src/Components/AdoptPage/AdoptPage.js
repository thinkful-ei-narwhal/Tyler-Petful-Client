import React, { Component, Fragment } from "react";
import Cat from "../Cat/Cat";
import Dog from "../Dog/Dog";
import NameForm from "../NameForm/NameForm";
import Timer from "../Timer/Timer";
import UserContext from "../../Contexts/UserContext";

export class AdoptPage extends Component {
  static contextType = UserContext;

  render() {
    const { waiting, submitted, adopted, animalAdopted } = this.context;

    return (
      <Fragment>
        <h1>Petful - Adopt!</h1>
        <h2>Creating Happy Pet Families since 2020</h2>
        <p>
          Enter your name to get started. When it's your turn, you may adopt!
        </p>
        <NameForm />
        {(submitted && waiting) || adopted ? <Timer /> : null}
        {!waiting && !adopted ? (
          <p>It's your turn! You can now adopt!</p>
        ) : null}
        {adopted ? <p>Thank you for adopting {animalAdopted}!</p> : null}
        <div className="pet-container">
          <Cat />
          <Dog />
        </div>
      </Fragment>
    );
  }
}

export default AdoptPage;
