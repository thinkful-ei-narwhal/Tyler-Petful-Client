import React, { Component } from "react";
import UserContext from "../../Contexts/UserContext";

export class Timer extends Component {
  static contextType = UserContext;

  componentDidMount() {
    this.interval = setInterval(this.context.peoplePush, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { people } = this.context;

    return (
      <div>
        <p>Thanks For Choosing to Adopt Today!</p>
        <p>Serving Next: {`${people.all()}`}</p>
      </div>
    );
  }
}

export default Timer;
