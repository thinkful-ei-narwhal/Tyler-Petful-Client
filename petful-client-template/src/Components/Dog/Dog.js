import React, { Component } from "react";
import UserContext from "../../Contexts/UserContext";

export class Dog extends Component {
  static contextType = UserContext;

  render() {
    const {
      waiting,
      dogs,
      handleAdoptAnimal,
      handleAdopted,
      adopted,
    } = this.context;
    const current = dogs.first ? dogs.first.data : {};

    return (
      <div className="dog-container">
        <h3>Dog</h3>
        <img className="picture" alt="cute dog" src={`${current.imageURL}`} />
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
            handleAdoptAnimal("dog");
            handleAdopted();
          }}
        >
          Adopt Me!
        </button>
      </div>
    );
  }
}

export default Dog;
