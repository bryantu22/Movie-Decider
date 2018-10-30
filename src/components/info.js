import React, { Component } from "react";

//Info component is the information displayed at the bottom, and it's mainly just text formatted
class Info extends Component {
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
