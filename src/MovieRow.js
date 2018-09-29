import React from "react";
import axios from "axios";
import Card from "./card.js";
import Modal from "react-responsive-modal";

class MovieRow extends React.Component {
  constructor(props) {
    super();

    this.state = { showCard: false, data: "", open: false };
  }

  onOpenModal = () => {
    this.changeCard();
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
    this.setState({ showCard: !this.state.showCard });
    var ID = "";
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.props.movie.id +
          "/similar?&api_key=cfe422613b250f702980a3bbf9e90716"
      )
      .then(response => {
        if (response.data.results.length === 0) {
          this.setState({ showCard: !this.state.showCard });
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
          });
      });
  };

  render() {
    return (
      <div>

        <div
          style={{
            display: "inline-block",
            marginRight: "10px"
          }}
        >
          <img
            alt="poster"
            src={this.props.movie.poster_src}
            onClick={this.onOpenModal}
          />
          <div>
            {/*<button onClick={this.viewMovie}>Click Me</button>*/}
            {/* <button onClick={this.viewActors}>View Actors</button> */}
            {/* <button onClick={this.changeCard}>View Recommendation</button> */}
          </div>
        </div>
        <div>
          <Modal open={this.state.open} onClose={this.onCloseModal}>
            <Card data={this.state.data} />
          </Modal>

        </div>
      </div>
    );
  }
}

export default MovieRow;
