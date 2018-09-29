import React, { Component } from "react";
import "./App.css";
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
          if (counter < 10 && movie.poster_path != null)
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
            <span
              className="fa fa-search"
              style={{
                verticalAlign: "top",
                marginTop: "14px",
                marginLeft: "10px",
                display: "inline-block"
              }}
            />
          </div>
        </div>
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div
            style={{
              overflowX: "scroll",
              overflowY: "hidden",
              whiteSpace: "nowrap",
              width: "100%"
            }}
          >
            {this.state.rows.length > 0 ? this.state.rows : "No results"}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
