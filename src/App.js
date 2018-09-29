import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import MovieRow from "./MovieRow.js";

class App extends Component {
  constructor() {
    super();
    this.state = { rows: [] };

    this.handleSearch({ target: { value: "Django" } });
  }

  handleSearch(e) {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=886cbad81f9f93405487e46a949d9eec&query=" +
          e.target.value
      )
      .then(response => {
        var movieRows = [];
        var counter = 0;
        response.data.results.forEach(movie => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          if (counter < 5) movieRows.push(movieRow);
          counter++;
        });

        this.setState({ rows: movieRows });
      });
  }

  render() {
    return (
      <div>
        <input
          style={{
            width: "100%",
            height: "30px",
            fontSize: "1em",
            marginBottom: "10px"
          }}
          onChange={e => this.handleSearch(e)}
          placeholder="Search movie"
        />
        <div style={{ height: "100px" }}>{this.state.rows}</div>
      </div>
    );
  }
}

export default App;
