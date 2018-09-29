import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import MovieRow from "./MovieRow.js";

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
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          if (counter < 5) movieRows.push(movieRow);
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
              className="searchBar fa"
              onChange={e => this.handleSearch(e)}
              placeholder="Search for a movie..."
            />
            <span
              className="fa fa-search"
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
          </div>
        </div>
        <div class="modal" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {this.state.rows}
        </div>
      </div>
    );
  }
}

export default Search;
