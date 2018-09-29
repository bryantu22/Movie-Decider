import React, { Component } from "react";
import video from "./video-camera.png";

class Nav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="nav">
        <img className="nav-img" alt="poster" src={video} height="44" />
        <span className="nav-span">Movie Decider</span>
      </div>
    );
  }
}

export default Nav;
