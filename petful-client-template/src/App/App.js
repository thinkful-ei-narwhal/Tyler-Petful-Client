import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Cats from "../Cats/Cats";
import Dogs from "../Dogs/Dogs";
import Header from "../Header/Header";
import PeopleList from "../People/People";

class App extends Component {
  //submit to store=>people
  //people endpoint
  //cat endpoint
  //dog endpoint
  render() {
    return (
      <div className="main-div">
        <Header />
        <h1>Petful - Adoption Agency</h1>
        <PeopleList />
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
          <Route path={"/dogs"} component={Dogs} />
          <Route path={"/cats"} component={Cats} />
        </Switch>
      </div>
    );
  }
}

export default App;
