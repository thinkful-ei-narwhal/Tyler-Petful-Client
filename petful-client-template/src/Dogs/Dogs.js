import React, { Component } from "react";
import PetService from "../services/PetService";
import UserContext from "../context/UserContext";

export default class Dog extends Component {
  static contextType = UserContext;
  //   componentDidMount() {
  //     PetService.getDog().then((dog) => this.context.setDog(dog));
  //   }

  // example dog    {
  //   age: 3,
  //   breed: 'Boxer',
  //   description: 'boxer dog',
  //   gender: 'Male',
  //   imageURL: 'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //   name: 'Tim',
  //   story: 'Found in neighborhood'
  // }
  render() {
    const dog = this.context.currentDog;
    return (
      <div className="dogspage">
        <div className="catspage">
          <h2>{dog.name}</h2>
          <img src={dog.imageURL} alt={dog.description} />
          <p>{dog.age}</p>
          <p>{dog.gender}</p>
          <p>{dog.breed}</p>
          <p>{dog.story}</p>
        </div>
      </div>
    );
  }
}
