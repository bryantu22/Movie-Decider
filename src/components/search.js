import React, { Component } from "react";
import axios from "axios";
import Movie from "./movie.js";

class Search extends Component {
  constructor() {
    super();
    //state.rows will hold an array of the returned movies from the search
    this.state = { rows: [] };
    //setting default search value to the search term "Django" so it at least displays something initially
    this.handleSearch({ target: { value: "Django" } });
  }

  //Function that handles the search inputted by the user
  //e is the event of the current input and e.target.value is the value in that specific input
  handleSearch(e) {
    //axios is used to make our server calls
    //the api_key is generated from creating our account, and allows us access to to the data from the server
    //we paass in the search term (e.target.value) at the end of the endpoint to get JSON data back
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=886cbad81f9f93405487e46a949d9eec&query=" +
          e.target.value
      )
      //After the call is made and finished, we used the promise interface to handle the next part
      .then(response => {
        //counter allows us to stop it at 15 results only, and not go on forever for long load times
        //movieRows is an array that will hold all the movies (each movie will be its own component)
        var movieRows = [];
        var counter = 0;
        //run through the data until 15 results and get the information we want such as movie image, description, etc....
        response.data.results.forEach(movie => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          //Each movie has its own component and data is passed into it as props to handle and format it there
          const movieRow = <Movie key={movie.id} movie={movie} />;
          //push movie to the array at end of each loop until 15 results
          if (counter < 15 && movie.poster_path != null)
            movieRows.push(movieRow);
          counter++;
        });
        {/*store the movieRows array to ours local state variable "rows"*/}
        this.setState({ rows: movieRows });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="box">
          {/*Text information about our application and what it is*/}
          <h1 className="title">Welcome to Movie Decider!</h1>
          <p className="info">A simplistic movie recommender</p>
          {/*Search input field to take in user input and pass the input to our function "handleSearch" to make a server call*/}
          {/*Will call the function when input is changed using the built in "onChange"*/}
          <div className="searchBox">
            <input
              className="searchBar"
              onChange={e => this.handleSearch(e)}
              placeholder="Search for a movie..."
            />
            {/*Small "search" logo on the far right side of search box*/}
            <span className="fa fa-search search-logo" />
          </div>
        </div>
        {/*Row at the bottom of the screen that displays all the movies from state as long as the length is >0*/}
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
