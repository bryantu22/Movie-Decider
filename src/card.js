import React from "react";
import axios from "axios";

class card extends React.Component {
  constructor(props) {
    super(props);

    this.state = { counter: 1, data: this.props.data, array: this.props.array };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.inputValue !== this.props.inputValue) {
      this.setState({ data: nextProps.data });
    }
  }

  next = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.props.array[this.state.counter].id +
          "?api_key=886cbad81f9f93405487e46a949d9eec"
      )
      .then(response => {
        this.setState({ data: response.data, counter: this.state.counter + 1 });
      });
  };

  render() {
    const {
      original_title,
      // tagline,
      overview,
      release_date,
      runtime,
      // totalRevenue,
      vote_average,
      // production_companies,
      // genres,
      poster_path
    } = this.state.data;

    // const genre = genres
    //   ? genres.map((genre, i) => {
    //       return (
    //         <span className="genre-list" key={i}>
    //           {genre.name}
    //         </span>
    //       );
    //     })
    //   : "";

    // const companies = genres
    //   ? production_companies.map((company, i) => {
    //       return (
    //         <span className="genre-list" key={i}>
    //           {company.name} &nbsp;
    //         </span>
    //       );
    //     })
    //   : "";

    const poster = "https://image.tmdb.org/t/p/w185" + poster_path;

    return (
      <div>
        <img className="card-img" alt="poster" src={poster} />
        <div className="info-box">
          <h1>{original_title}</h1>
          <p className="releasedate">{release_date}</p>
          <p>{overview}</p>
          <div className="movie-stats-box">
            <div className="stats">
              <p>Length</p>
              <span>{runtime} minutes</span>
            </div>

            <div className="stats">
              <p>Voting Average</p>
              <span>{vote_average} /10</span>
            </div>
            <div className="stats">
              <button onClick={this.next}>
                Next suggestion <span className="fa fa-arrow-circle-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default card;
