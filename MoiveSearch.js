import React from "react";
import Axios from "axios";

class MoiveSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      Movies: [],
      display: " ",
      value: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const apiKey = "728de06e";
    const url = `http://www.omdbapi.com/?t=${
      this.state.value
    }&apikey=${apiKey}`;
    Axios.get(url).then(response => {
      //console.log(response.data);
      this.setState({
        isLoaded: true,
        Movies: response.data,
        display: "show",
        value: ""
      });
    });
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  handleClick = event => {
    this.setState({
      display: "hide"
    });
  };
  render() {
    const { Movies, isLoaded, display } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} style={{ marginLeft: "38%" }}>
          <span className="form-inline">
            <input
              className="form-control"
              type="text/number"
              onChange={this.handleChange}
              value={this.state.value}
              placeholder="Movie Title"
              style={{ width: "35%", fontSize: "1.2em" }}
              id="input"
            />
            <button className="btn btn-dark" type="submit">
              <i className="fas fa-search" />
            </button>
          </span>
        </form>
        <br />
        <br />
        {isLoaded === false ? null : (
          <div className={display}>
            <span
              onClick={this.handleClick}
              className="close"
              style={{
                color: "red",
                fontWeight: "bolder",
                fontSize: "3.7em",
                marginTop: "82.5%",
                marginRight: "24.5%",
                zIndex: 1
              }}
            >
              ×
            </span>
            {Movies.Poster === "N/A" || Movies.Error === "Movie not found!" ? (
              <p
                style={{ color: "white", marginLeft: "38%", fontSize: "2.2em" }}
              >
                Sorry Movie Not In DataBase
              </p>
            ) : (
              <div
                className="card mb-3"
                style={{ width: "50%", marginLeft: "25%" }}
              >
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      alt="loading"
                      src={Movies.Poster}
                      className="img-thumbnail"
                      style={{
                        width: "250px",
                        height: "auto",
                        marginLeft: "5%"
                      }}
                      id=""
                      margin="auto"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body" style={{ paddingRight: "2.5%" }}>
                      <h3
                        className="card-title"
                        style={{ marginLeft: "19px", width: "80%" }}
                      >
                        {Movies.Title}
                        <hr />
                      </h3>
                      <br />
                      <p className="card-text" style={{ fontSize: "1.3em" }}>
                        <strong>Summary: </strong>
                        {Movies.Plot}
                      </p>
                      <p className="card-text" style={{ fontSize: "1.3em" }}>
                        <strong>Genre: </strong>
                        {Movies.Genre}.
                      </p>
                      <p className="card-text" style={{ fontSize: "1.3em" }}>
                        <strong>Release Date: </strong>
                        {Movies.Released}
                      </p>
                      <p className="card-text" style={{ fontSize: "1.3em" }}>
                        <strong>Run time: </strong>
                        {Movies.Runtime}
                      </p>
                      <p className="card-text" style={{ fontSize: "1.3em" }}>
                        <strong>Rating:</strong> {Movies.imdbRating}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}{" "}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default MoiveSearch;
