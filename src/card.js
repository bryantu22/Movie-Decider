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
      <div style={{ marginTop: "20px" }}>
        <img
          src={poster}
          style={{
            width: "20%",
            display: "inline-block",
            verticalAlign: "top",
            maxHeight: "290px",
            maxWidth: "200px",
            marginRight: "20px"
          }}
        />
        <div style={{ width: "70%", display: "inline-block" }}>
          <h1>{original_title}</h1>
          <p>{tagline}</p>
          <p>{overview}</p>
          <p>{genre}</p>
          <p>{companies}</p>
          <p>{release_date}</p>
          <p>
            Running Time:
            {runtime} mins
          </p>
          <p>{totalRevenue}</p>
          <p>{vote_average} /10</p>
        </div>
      </div>
    );
  }
}

export default card;
