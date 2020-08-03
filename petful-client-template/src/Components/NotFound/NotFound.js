import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  state = { error: null };

  static getDerivedStateFormError(error) {
    return error;
  }
  render() {
    if (this.state.error) {
      return (
        <main className="error-page">
          <h1>{this.state.error}</h1>
          <h1>Oops!</h1>
          <p>
            Something went wrong. Try refreshing the page or returning to home.
          </p>
          <Link to="/">
            <i className="fas fa-home"></i> Home
          </Link>
        </main>
      );
    }
    //otherwise render the children
    return this.props.children;
  }
}
