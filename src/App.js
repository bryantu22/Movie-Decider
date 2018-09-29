import React, { Component } from "react";
import "./App.css";
import Nav from "./nav.js";
import Search from "./search.js";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav />
        <Search />
      </div>
    );
  }
}

export default App;
