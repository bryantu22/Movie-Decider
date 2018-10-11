import React, { Component } from "react";
import axios from "axios";
import Movie from "./movie.js";

class Search extends Component {
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
          const movieRow = <Movie key={movie.id} movie={movie} />;
          if (counter < 15 && movie.poster_path != null)
            movieRows.push(movieRow);
          counter++;
        });

        this.setState({ rows: movieRows });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="box">
          <h1 className="title">Welcome to Movie Decider!</h1>
          <p className="info">A simplistic movie recommender</p>
          <div className="searchBox">
            <input
              className="searchBar"
              onChange={e => this.handleSearch(e)}
              placeholder="Search for a movie..."
            />
            <span className="fa fa-search search-logo" />
          </div>
        </div>
        <div className="row-container">
          <div className="rows-of-movie">
            {this.state.rows.length > 0 ? this.state.rows : "No results"}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
