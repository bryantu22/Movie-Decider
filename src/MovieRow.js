import React from "react";
import axios from "axios";
import Card from "./card.js";

class MovieRow extends React.Component {
  constructor(props) {
    super();

    this.state = { showCard: false, data: "a" };
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

  changeCard = () => {
    this.setState({ showCard: !this.state.showCard });
    var ID = "apple";
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.props.movie.id +
          "/similar?&api_key=cfe422613b250f702980a3bbf9e90716"
      )
      .then(response => {
        if (response.data.results.length == 0) {
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
<<<<<<< HEAD
        <img
=======
         <img
          alt="poster"
>>>>>>> master
          width="10%"
          src={this.props.movie.poster_src}
          style={{ display: "inline-block" }}
        />
        <div
          style={{
            display: "inline-block",
            width: "80%",
            marginBottom: "10px",
            verticalAlign: "top",
<<<<<<< HEAD
            paddingLeft: "2%"
          }}
        >
          <h3>{this.props.movie.title}</h3>
          <p>{this.props.movie.overview}</p>
          {/*<button onClick={this.viewMovie}>Click Me</button>*/}
          <button onClick={this.viewActors}>View Actors</button>
          <button onClick={this.changeCard}>View Recommendation</button>
=======
            paddingLeft: '2%'
          }}
        >
          <h3>{this.props.movie.title}</h3>
           <p>{this.props.movie.overview}</p>
           {/*<button onClick={this.viewMovie}>Click Me</button>*/}
          <button onClick={this.viewActors}>View Actors</button>
>>>>>>> master
        </div>
        {this.state.showCard ? <Card data={this.state.data} /> : ""}
      </div>
    );
  }
}

export default MovieRow;
