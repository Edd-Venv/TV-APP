import React from "react";
import { MovieSearchContext } from "../../contexts/movieSearchContext";
import FetalMovieSearchError from "./FetalMovieSearchError";
import MovieSearchResult from "./MovieSearchResult";

class MovieSearch extends React.Component {
  static contextType = MovieSearchContext;

  render() {
    const {
      Movies,
      isLoaded,
      display,
      Test,
      MovieTrailer,
      handleSubmit,
      handleChange,
      value,
      handleClick
    } = this.context;
    return (
      <React.Fragment>
        <form onSubmit={handleSubmit} style={{ marginLeft: "39.3%" }}>
          <span className="form-inline">
            <button id="SearchButton" type="submit">
              <i className="fas fa-search" />
            </button>
            <input
              className="InputStyle"
              type="text/number"
              onChange={handleChange}
              value={value}
              placeholder="Movie Title"
              style={{ width: "35%", fontSize: "1.2em" }}
              id="input"
            />
          </span>
        </form>
        <br />
        <br />
        {isLoaded === false ? null : (
          <div className={display}>
            {Movies.Poster === "N/A" || Movies.Error === "Movie not found!" ? (
              <FetalMovieSearchError handleClick={handleClick} />
            ) : (
              <MovieSearchResult
                Movies={Movies}
                Test={Test}
                MovieTrailer={MovieTrailer}
                handleClick={handleClick}
              />
            )}{" "}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default MovieSearch;
