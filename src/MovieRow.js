import React from "react";
import axios from "axios";

class MovieRow extends React.Component {
  constructor(props) {
    super();
  }

  viewMovie = () => {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
    return 0;
  };

  viewActors = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.props.movie.id +
          "/credits?api_key=886cbad81f9f93405487e46a949d9eec"
      )
      .then(response => {
        console.log(response.data.cast);
      });
  };

  render() {
    return (
      <div>
        <img
          alt="poster"
          width="10%"
          src={this.props.movie.poster_src}
          style={{ display: "inline-block" }}
        />
        <div
          style={{
            display: "inline-block",
            width: "90%",
            marginBottom: "10px",
            verticalAlign: "top"
          }}
        >
          <h3>{this.props.movie.title}</h3>
          <p>{this.props.movie.overview}</p>
          <button onClick={this.viewMovie}>Click Me</button>
          <button onClick={this.viewActors}>View Actors</button>
        </div>
      </div>
    );
  }
}

export default MovieRow;
