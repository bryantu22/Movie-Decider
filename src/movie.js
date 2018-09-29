import React from "react";
import axios from "axios";
import Card from "./card.js";
import Modal from "react-responsive-modal";
import Error from "./error.js";

class Movie extends React.Component {
  constructor(props) {
    super();

    this.state = { similar: true, data: "", open: false };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
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
          "/credits?api_key=cfe422613b250f702980a3bbf9e90716"
      )
      .then(response => {
        console.log(response.data.cast);
      });
  };

  changeCard = () => {
    var ID = "";
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.props.movie.id +
          "/similar?&api_key=cfe422613b250f702980a3bbf9e90716"
      )
      .then(response => {
        if (response.data.results.length === 0) {
          this.setState({ similar: false });
          this.onOpenModal();
          return;
        }
        ID = response.data.results[0].id;
        axios
          .get(
            "https://api.themoviedb.org/3/movie/" +
              ID +
              "?api_key=886cbad81f9f93405487e46a949d9eec"
          )
          .then(response => {
            this.setState({ data: response.data });
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
          <Modal open={this.state.open} onClose={this.onCloseModal}>
            {this.state.similar ? <Card data={this.state.data} /> : <Error />}
          </Modal>
        </div>
      </div>
    );
  }
}

export default Movie;
