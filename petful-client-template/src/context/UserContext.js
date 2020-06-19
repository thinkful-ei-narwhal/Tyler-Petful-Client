import React, { Component, createContext } from "react";
import PeopleService from "../services/PeopleService";

const UserContext = createContext({
  name: null,
  currentDog: {},
  currentCat: {},
  peopleList: [],
  setCat: () => {},
  setDog: () => {},
  setPeople: () => {},
  setName: () => {},
});

export default UserContext;

export class UserContextProvider extends Component {
  state = {
    name: null,
    currentDog: {},
    currentCat: {},
    peopleList: [],
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
  setName = (name) => {
    this.setState({ name: name });
    PeopleService.addMe(name);
  };
  render() {
    const value = {
      name: this.state.name,
      currentDog: this.state.currentDog,
      currentCat: this.state.currentCat,
      peopleList: this.state.peopleList,
      setCat: this.setCat,
      setDog: this.setDog,
      setPeople: this.setPeople,
      setName: this.setName,
    };
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
