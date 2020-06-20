import React, { Component } from "react";
import UserContext from "../context/UserContext";
import PeopleService from "../services/PeopleService";
import "./People.css";

class PeopleList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    PeopleService.getPeople().then((people) => this.context.setPeople(people));
  }

  render() {
    return (
      <div className="people-sidebar">
        <h3>Sign Up List</h3>
        <form
          className="signup-form"
          onSubmit={(e) => {
            e.preventDefault();
            this.context.submitAddMe(e);
          }}
        >
          <input
            type="text"
            className="signup-name"
            id="inputname"
            name="name"
          />
          <input type="submit" className="signup-btn" />
        </form>

        <ul className="people-ul">
          {this.context.peopleList.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default PeopleList;
