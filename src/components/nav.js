import React, { Component } from "react";
import video from "../images/logo.png";

//Nav component is the navbar at the top of the website
class Nav extends Component {
  render() {
    return (
      <div className="nav">
        {/*logo's source is imported from the images folder*/}
        <img className="nav-img" alt="poster" src={video} height="45" />
        {/*Title of our application in navbar*/}
        <span className="nav-span">Movie Decider</span>
      </div>
    );
  }
}

export default Nav;
