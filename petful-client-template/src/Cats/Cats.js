import React, { Component } from "react";
import PetService from "../services/PetService";
import UserContext from "../context/UserContext";

export default class Cats extends Component {
  static contextType = UserContext;
  render() {
    const cat = this.context.currentCat;
    return (
      <div className="catspage">
        <h2>{cat.name}</h2>
        <img src={cat.imageURL} alt={cat.description} />
        <p>{cat.age}</p>
        <p>{cat.gender}</p>
        <p>{cat.breed}</p>
        <p>{cat.story}</p>
      </div>
    );
  }
}
