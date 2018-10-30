import React from "react";
import axios from "axios";
import SimilarMovie from "./similar_movie.js";
import Modal from "react-responsive-modal";
import Error from "./error.js";

class Movie extends React.Component {
  //passing props in from search.js
  constructor(props) {
    super();
    //similar will know if it has a similar movie or not
    //data is the data of the movie passed in
    //open is used as boolean for popup of recommendation
    //array is array of similar movies IDs
    this.state = { similar: true, data: "", open: false, array: [] };
  }

  //changing state based on if modal is open or not
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  //Currently not implemented for this iteration
  viewMovie = () => {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
    return 0;
  };
    //Currently being modified for next iteration
  viewActors = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.props.movie.id +
          "/credits?api_key=cfe422613b250f702980a3bbf9e90716"
      )
      .then(response => {
        console.log(response.data.cast);
      });
  };

  //changeCard gets the recommendation information
  changeCard = () => {
    var ID = "";
    //makes call to server to get recommended movie
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.props.movie.id +
          "/recommendations?&api_key=cfe422613b250f702980a3bbf9e90716"
      )
      //if no results come back then set state of similar to false so we can handle it accordingly
      .then(response => {
        if (response.data.results.length === 0) {
          this.setState({ similar: false });
          this.onOpenModal();
          return;
        }
        //otherwise take that movie and get all the ID to be passed in
        var array = response.data.results;
        ID = response.data.results[0].id;
        axios
          .get(
            "https://api.themoviedb.org/3/movie/" +
              ID +
              "?api_key=886cbad81f9f93405487e46a949d9eec"
          )
          //After set state to that information and openthe modal
          .then(response => {
            this.setState({ data: response.data, array: array });
            this.onOpenModal();
          });
      });
  };

  render() {
    return (
      <div className="movie-row">
        <div className="movie-content">
          <img
            alt="poster"
            src={this.props.movie.poster_src}
            onClick={this.changeCard}
          />
          <div>
            {/*<button onClick={this.viewMovie}>Click Me</button>*/}
            {/* <button onClick={this.viewActors}>View Actors</button> */}
            {/* <button onClick={this.changeCard}>View Recommendation</button> */}
          </div>
        </div>
        <div>
        {/*Inside the modal is the component with the IDs passed in so it can be formatted there*/}
          <Modal open={this.state.open} onClose={this.onCloseModal}>
            {this.state.similar ? (
              <SimilarMovie data={this.state.data} array={this.state.array} />
            ) : (
              <Error />
            )}
          </Modal>
        </div>
      </div>
    );
  }
}

export default Movie;
