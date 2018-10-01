import React, { Component } from "react";
import Search from "./components/search.js";
import Info from "./components/info.js";
import Nav from "./components/nav.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Search />
        <Info />
      </div>
    );
  }
}

export default App;
