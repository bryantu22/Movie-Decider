import React from "react";

class card extends React.Component {
  constructor(props) {
    super();
  }

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
    } = this.props.data;
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
              <p>Length</p>
              <span>{vote_average} /10</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default card;
