import React, { Component, createContext } from "react";
import PeopleService from "../services/PeopleService";
import PetService from "../services/PetService";

const UserContext = createContext({
  name: null,
  currentDog: {},
  currentCat: {},
  peopleList: [],
  isUserTurn: false,
});

export default UserContext;

export class UserContextProvider extends Component {
  state = {
    name: null,
    currentDog: {},
    currentCat: {},
    peopleList: [],
    isUserTurn: false,
  };

  setUserTurn = (boolean) => {
    this.setState({
      isUserTurn: boolean,
    });
  };

  setCat = (cat) => {
    this.setState({ currentCat: cat });
  };
  setDog = (dog) => {
    this.setState({ currentDog: dog });
  };
  setPeople = (people) => {
    this.setState({
      peopleList: people,
    });
  };

  addPerson = (person) => {
    this.setState({
      peopleList: [...this.state.peopleList, person],
    });
  };

  deletePerson = () => {
    let people = this.state.peopleList;
    PeopleService.deleteMe();
    people.shift();
    this.setState({
      peopleList: [...people],
    });
  };

  deleteDog = () => {
    PetService.delDog().then(() => {
      PetService.getDog().then((dog) => {
        console.log(dog);
        this.setDog(dog);
      });
    });
  };

  deleteCat = () => {
    PetService.delCat().then(() => {
      PetService.getCat().then((cat) => {
        this.setCat(cat);
      });
    });
  };

  submitAddMe = (e) => {
    this.setState({ name: e.target.name.value });
    PeopleService.addMe(e.target.name.value).then((name) => {
      this.setState({
        peopleList: [...this.state.peopleList, name.name],
      });
    });
  };

  render() {
    const value = {
      name: this.state.name,
      currentDog: this.state.currentDog,
      currentCat: this.state.currentCat,
      peopleList: this.state.peopleList,
      isUserTurn: this.state.isUserTurn,
      setCat: this.setCat,
      setDog: this.setDog,
      setPeople: this.setPeople,
      submitAddMe: this.submitAddMe,
      setUserTurn: this.setUserTurn,
      deletePerson: this.deletePerson,
      deleteDog: this.deleteDog,
      deleteCat: this.deleteCat,
      addPerson: this.addPerson,
    };
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
