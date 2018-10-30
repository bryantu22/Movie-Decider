import React, { Component } from "react";
import Search from "./components/search.js";
import Info from "./components/info.js";
import Nav from "./components/nav.js";
import "./App.css";

//App component is the main page of our website
//It will contain all the parts of the website split into sections such as Nav, Search, Info, etc
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
