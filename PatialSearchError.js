import React from "react";
import "./Search.css";

class PartialSearchError extends React.Component {
  render() {
    const { data, summary } = this.props;
    return (
      <React.Fragment>
        <h2 className="card-img-top" style={{ marginLeft: "20%" }}>
          <i>IMAGE IS NOT AVAILABLE</i>
        </h2>
        <hr />
        <div className="card-body">
          <h2 className="card-title" style={{ marginLeft: "41%" }}>
            {data.name}
          </h2>
          <div className="card-text" id="font-size">
            <p>
              {" "}
              <strong>Description:</strong>
              {summary}
            </p>
            <p>
              <strong>Premiered: </strong>
              {data.premiered}{" "}
            </p>
            <p>
              <strong>Runtime: </strong>
              {data.runtime} mins
            </p>
            <p>
              <strong>Rating: </strong>
              {data.rating.average}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PartialSearchError;
