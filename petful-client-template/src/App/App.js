import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import PeopleList from "../People/People";
import PeopleService from "../services/PeopleService";
import PetService from "../services/PetService";
import UserContext from "../context/UserContext";

class App extends Component {
  static contextType = UserContext;

  interval = null;
  counter = 0;
  newUsers = [
    "Jennifer Lawrence",
    "Michael Cera",
    "Ricky Gervais",
    "Steve Irwin",
    "Pink Power Ranger",
  ];
  i = 0;
  adoptTimer = () => {
    console.log(this.counter);
    if (this.context.peopleList[0] == this.context.name) {
      console.log(this.context.name);
      this.context.setUserTurn(true);
      PeopleService.addMe(this.newUsers[this.i]).then((name) => {
        this.i++;
        this.context.addPerson(name.name);
      });
      //show buttons hidden={!userTurn}
      //redeclare interval when "adopt" is chosen
      if (this.i == 4) {
        clearInterval(this.interval);
      }
    }

    if (this.context.peopleList.length !== 0 && !this.context.isUserTurn) {
      if (this.counter % 2 === 0) {
        console.log("first", this.counter % 2);
        this.context.deleteDog();
        this.context.deletePerson();
        return (this.counter += 1);
      } else {
        console.log("second", this.counter % 2);
        this.context.deleteCat();
        this.context.deletePerson();
        return (this.counter += 1);
      }
    }
    if (this.context.peopleList.length === 0) {
      clearInterval(this.interval);
    }
  };

  componentDidMount = () => {
    this.interval = setInterval(this.adoptTimer, 5000);
  };

  render() {
    return (
      <div className="main-div">
        <h1>Petful - Adoption Agency</h1>
        <PeopleList />
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
