import React from "react";

class card extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const {
      original_title,
      tagline,
      overview,
      release_date,
      runtime,
      totalRevenue,
      vote_average,
      production_companies,
      genres,
      poster_path
    } = this.props.data;
    const genre = genres
      ? genres.map((genre, i) => {
          return (
            <span className="genre-list" key={i}>
              {genre.name}
            </span>
          );
        })
      : "";

    const companies = genres
      ? production_companies.map((company, i) => {
          return (
            <span className="genre-list" key={i}>
              {company.name} &nbsp;
            </span>
          );
        })
      : "";
    const poster = "https://image.tmdb.org/t/p/w185" + poster_path;
    return (
      <div>
        <img
          alt="poster"
          src={poster}
          style={{
            height: "100%",
            display: "inline-block",
            verticalAlign: "top",
            width: "30%",
            marginRight: "20px"
          }}
        />
        <div style={{ width: "60%", display: "inline-block" }}>
          <h1>{original_title}</h1>
          <p style={{ borderBottom: "solid 1px #dce6f7" }}>{release_date}</p>
          <p>{overview}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              textAlign: "center"
            }}
          >
            <div
              style={{
                display: "inline-block",
                marginRight: "10px"
              }}
            >
              <p>Length</p>
              <span>{runtime} minutes</span>
            </div>
            <div
              style={{
                display: "inline-block",
                marginRight: "10px"
              }}
            >
              <p>Vote average</p>
              <span>{vote_average} /10</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default card;
