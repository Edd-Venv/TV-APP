import React from "react";
import Axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      value: [],
      data: [],
      image: [],
      display: " ",
      summary: []
    };
  }
  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const url = `http://api.tvmaze.com/search/shows?q=${
      this.state.value
    }&embed=seasons`;
    Axios.get(url).then(response => {
      console.log(response.data[0].show.summary);
      this.setState({
        isLoaded: true,
        data: response.data[0].show,
        image: response.data[0].show.image,
        display: "show",
        summary: response.data[0].show.summary
          .replace(/<p>/g, " ")
          .replace(/<b>/g, " ")
          .replace(/p>/g, " ")
          .replace(/</g, " ")
          .replace(/b>/g, " "),
        value: " "
      });
    });
  };
  handleClick = event => {
    this.setState({
      display: "hide"
    });
  };

  render() {
    const { data, isLoaded, image, display, summary } = this.state;
    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        <br />
        <form onSubmit={this.handleSubmit} style={{ marginLeft: "38%" }}>
          <span className="form-inline">
            <input
              className="form-control"
              type="text/number"
              onChange={this.handleChange}
              value={this.state.value}
              placeholder="Show Name"
              style={{ width: "35%", fontSize: "1.2em" }}
            />
            <button className="btn btn-dark" type="submit">
              <i class="fas fa-search" />
            </button>
          </span>
        </form>
        <br />
        <br />
        {isLoaded === false ? null : (
          <React.Fragment>
            <div class={display}>
              <div
                style={{ width: "37%", marginLeft: "32%", maxHeight: "30%" }}
                class="card mb-3"
              >
                <span
                  onClick={this.handleClick}
                  class="close"
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "3em"
                  }}
                >
                  ×
                </span>
                {image === null ? (
                  <React.Fragment>
                    <h2 class="card-img-top" style={{ marginLeft: "20%" }}>
                      <i>IMAGE IS NOT AVAILABLE</i>
                    </h2>
                    <hr />
                    <div class="card-body">
                      <h2 class="card-title" style={{ marginLeft: "41%" }}>
                        {data.name}
                      </h2>
                      <p class="card-text" style={{ fontSize: "1.3em" }}>
                        {" "}
                        <strong>Description:</strong>
                        {summary}
                      </p>
                      <p style={{ fontSize: "1.3em" }}>
                        <strong>Premiered: </strong>
                        {data.premiered}{" "}
                      </p>
                      <p style={{ fontSize: "1.3em" }}>
                        <strong>Runtime: </strong>
                        {data.runtime}
                      </p>
                      <p style={{ fontSize: "1.3em" }}>
                        <strong>Rating: </strong>
                        {data.rating.average}
                      </p>
                    </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <img
                      src={image.original}
                      alt={data.name}
                      style={{ width: "100%", maxHeight: "70%" }}
                      class="card-img-top"
                    />
                    <div class="card-body">
                      <h2 class="card-title" style={{ marginLeft: "41%" }}>
                        {data.name}
                      </h2>
                      <p class="card-text" style={{ fontSize: "1.3em" }}>
                        {" "}
                        <strong>Description:</strong>
                        {summary}
                      </p>
                      <p style={{ fontSize: "1.3em" }}>
                        <strong>Premiered: </strong>
                        {data.premiered}{" "}
                      </p>
                      <p style={{ fontSize: "1.3em" }}>
                        <strong>Runtime: </strong>
                        {data.runtime}
                      </p>
                      <p style={{ fontSize: "1.3em" }}>
                        <strong>Rating: </strong>
                        {data.rating.average}
                      </p>
                    </div>{" "}
                  </React.Fragment>
                )}
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Search;
