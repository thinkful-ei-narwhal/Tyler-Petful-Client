import React, { Component } from "react";
import UserContext from "../../Contexts/UserContext";

export class Cat extends Component {
  static contextType = UserContext;

  render() {
    const {
      waiting,
      cats,
      handleAdoptAnimal,
      handleAdopted,
      adopted,
    } = this.context;
    const current = cats.first ? cats.first.data : {};

    return (
      <div className="cat-container">
        <h3>Cat</h3>
        <img className="picture" alt="cute cat" src={`${current.imageURL}`} />
        <p>Name: {`${current.name}`}</p>
        <p>Description: {`${current.description}`}</p>
        <p>Gender: {`${current.gender}`}</p>
        <p>Age: {`${current.age}`}</p>
        <p>Breed: {`${current.breed}`}</p>
        <p>
          {`${current.name}`}'s Story: {`${current.story}`}
        </p>
        <button
          disabled={waiting || adopted}
          onClick={(e) => {
            e.preventDefault();
            handleAdoptAnimal("cat");
            handleAdopted();
          }}
        >
          Adopt Me!
        </button>
      </div>
    );
  }
}

export default Cat;
