import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import PetService from "../services/PetService";

export default class LandingPage extends Component {
  static contextType = UserContext;
  componentDidMount() {
    PetService.getDog().then((dog) => this.context.setDog(dog));
    PetService.getCat().then((cat) => this.context.setCat(cat));
  }

  state = {
    hiddenCat: true,
    hiddenDog: true,
  };

  unhideCat = () => {
    this.setState({ hiddenCat: !this.state.hiddenCat });
  };

  unhideDog = () => {
    this.setState({ hiddenDog: !this.state.hiddenDog });
  };

  dogDetails = () => {
    return (
      <div className="dogdetails" hidden={this.hiddenDog}>
        <p>{this.context.currentDog.breed}</p>
        <p>{this.context.currentDog.gender}</p>
        <p>{this.context.currentDog.story}</p>
        <button
          hidden={!this.context.isUserTurn}
          onClick={() => {
            this.context.deleteDog();
            this.context.setUserTurn(false);
            this.context.deletePerson();
          }}
        >
          Adopt Me!
        </button>
      </div>
    );
  };

  catDetails = () => {
    return (
      <div className="catdetails" hidden={this.hiddenCat}>
        <p>{this.context.currentCat.breed}</p>
        <p>{this.context.currentCat.gender}</p>
        <p>{this.context.currentCat.story}</p>
        <button
          hidden={!this.context.isUserTurn}
          onClick={() => {
            this.context.deleteCat();
            this.context.setUserTurn(false);
            this.context.deletePerson();
          }}
        >
          Adopt Me!
        </button>
      </div>
    );
  };

  render() {
    return (
      <div className="landingpage">
        <h2>I want to adopt a...</h2>
        <div className="dogdiv">
          <img src={this.context.currentDog.imageURL} />
          <p>{`Name: ${this.context.currentDog.name}`},</p>
          <p> {`Age: ${this.context.currentDog.age}`} </p>
          <button name="Dog Details" onClick={this.unhideDog}>
            Dog Details
          </button>
          {!this.state.hiddenDog && this.dogDetails()}
        </div>
        <div className="catdiv">
          <img src={this.context.currentCat.imageURL} />
          <p>
            <p>{`Name: ${this.context.currentCat.name}`},</p>
            <p> {`Age: ${this.context.currentCat.age}`} </p>
          </p>
          <button name="Cat Details" onClick={this.unhideCat}>
            Cat Details
          </button>
          {!this.state.hiddenCat && this.catDetails()}
        </div>
      </div>
    );
  }
}
