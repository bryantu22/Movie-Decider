import React from "react";
import axios from "axios";

class SimilarMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = { counter: 1, data: this.props.data, array: this.props.array };
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
      tagline,
      overview,
      release_date,
      // runtime,
      // totalRevenue,
      // vote_average,
      // production_companies,
      genres,
      poster_path,
      backdrop_path
    } = this.state.data;

    const genre = genres
      ? genres.map((genre, i) => {
          return (
            <span className="genre-list" key={i}>
              {genre.name}, &nbsp;
            </span>
          );
        })
      : "";

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
    const bg = "url(https://image.tmdb.org/t/p/w185" + backdrop_path + ")";

    return (
      <div className="test-container">
        <div
          className="test"
          style={{
            backgroundImage: bg
          }}
        >
          <img className="card-img" alt="poster" src={poster} />
          <div className="movie-stuff">
            <h1 className="card-title">{original_title}</h1>
            <span className="tagline">{tagline}</span>
          </div>
        </div>
        <div className="movie-info-box">
          <h1 className="sub-title">OVERVIEW </h1>
          <p className="overview">{overview}</p>
          <h1 className="sub-title">GENRES </h1>
          <span className="small-info genres">{genre}</span>
          <h1 className="sub-title">RELEASE DATE </h1>
          <span className="small-info">{release_date}</span>
          <button className="next-button" onClick={this.next}>
            Next suggestion <span className="fa fa-arrow-circle-right" />
          </button>
        </div>
      </div>
    );
  }
}

export default SimilarMovie;
