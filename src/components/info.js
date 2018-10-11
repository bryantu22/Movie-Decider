import React, { Component } from "react";

class Info extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="info-container">
        <h1>Select a movie to see a recommendation!</h1>
        <p>Some movies are missing information or a recommendation</p>
        <p>Being over the age of 18 is recommended</p>
        <p>Logo made by Freepik from www.flaticon.com</p>
      </div>
    );
  }
}

export default Info;
