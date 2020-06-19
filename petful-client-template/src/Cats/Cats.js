import React, { Component } from "react";
import PetService from "../services/PetService";
import UserContext from "../context/UserContext";

export default class Cats extends Component {
  static contextType = UserContext;

  componentDidMount() {
    PetService.getCat().then((cat) => this.context.setCat(cat));
  }
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
        <input
          type="button"
          class="adopt-btn"
          hidden={!this.context.isUserTurn}
          name="Adopt Me"
          value="Adopt Me"
          onClick={(this.context.deleteCat(), this.context.setUserTurn(false))}
        />
      </div>
    );
  }
}
