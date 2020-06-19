import React, { Component } from "react";
import UserContext from "../context/UserContext";
import PeopleService from "../services/PeopleService";

class PeopleList extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div className="people-sidebar">
        <ul>
          {this.context.peopleList.map((p) => (
            <li>{p}</li>
          ))}
        </ul>
        <form className="signup-form">
          <input type="text" className="signup-name" id="inputname" />
          <input
            type="submit"
            className="signup-btn"
            value="Add Me"
            onClick={(e) => this.context.setName(e)}
          />
        </form>
      </div>
    );
  }
}
export default PeopleList;
