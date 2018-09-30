import React, { Component } from "react";
import "./App.css";

class Info extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="info-container">
        <p>1. Search for a movie </p>
        <p>2. Select a movie you want to see recomendation pop up </p>
        <p>4. Click "View Next" to see next recommendation </p>
      </div>
    );
  }
}

export default Info;
