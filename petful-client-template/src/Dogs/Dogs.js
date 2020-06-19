import React, { Component } from "react";
import PetService from "../services/PetService";
import UserContext from "../context/UserContext";

export default class Dog extends Component {
  static contextType = UserContext;

  componentDidMount() {
    PetService.getDog().then((dog) => this.context.setDog(dog));
  }

  render() {
    console.log("The current dog", this.context.currentDog);
    if (this.context.currentDog) {
      let dog = this.context.currentDog;
      return (
        <div className="dogspage">
          <h2>{dog.name}</h2>
          <img src={dog.imageURL} alt={dog.description} />
          <p>{dog.age}</p>
          <p>{dog.gender}</p>
          <p>{dog.breed}</p>
          <p>{dog.story}</p>
          <input
            type="button"
            class="adopt-btn"
            hidden={!this.context.isUserTurn}
            name="Adopt Me"
            value="Adopt Me"
            onClick={this.context.deleteDog()}
          />
        </div>
      );
    } else {
      return <></>;
    }
  }
}
