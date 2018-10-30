import React, { Component } from "react";

//Error class that returns a div of text saying no output could be found for a similar movie
class Erorr extends Component {
  render() {
    return <div className="error-box">No similar movie could be found</div>;
  }
}

export default Erorr;
