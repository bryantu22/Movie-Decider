import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import MovieRow from "./MovieRow.js";

class App extends Component {
  constructor() {
    super();
    this.state = { rows: "" };
  }

  handleSearch(e) {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=886cbad81f9f93405487e46a949d9eec&query=" +
          e.target.value
      )
      .then(response => {
        var movieRows = [];

        response.data.results.forEach((movie, i) => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          const movieRow = <MovieRow key={i} movie={movie} />;
          movieRows.push(movieRow);
        });

        this.setState({ rows: movieRows });
      });
  }

  render() {
    return (
      <div>
        <input
          style={{ width: "100%" }}
          onChange={e => this.handleSearch(e)}
          placeholder="Search a movie"
        />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
