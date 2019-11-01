import React from "react";
import "./Search.css";
import PartialSearchError from "./PatialSearchError";
import FetalSearchError from "./FetalSearchError";

class SearchResult extends React.Component {
  render() {
    const {
      data,
      isLoaded,
      image,
      display,
      summary,
      Test,
      ShowTrailer,
      handleClick
    } = this.props;
    return (
      <React.Fragment>
        <br />
        <br />
        <div className={display}>
          {" "}
          {isLoaded === false || (isLoaded === true && data === undefined) ? (
            <FetalSearchError handleClick={handleClick} />
          ) : (
            <div className="search-container">
              <div className="card mb-3">
                <span onClick={handleClick} className="close" id="close-button">
                  ×
                </span>

                {image === null ? (
                  <PartialSearchError data={data} summary={summary} />
                ) : (
                  <React.Fragment>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <div className="ShowImage">
                          <img
                            src={image.original}
                            alt={data.name}
                            className="img-thumbnail"
                          />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h2 className="card-title">{data.name}</h2>
                          <div id="font-size" className="card-text">
                            <p>
                              {" "}
                              <strong>Description:</strong>
                              {summary}.
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
                      </div>
                      <React.Fragment>
                        {Test === "unknown" ? (
                          <p id="show-error-paragraph">SHOW NOT IN DATABASE</p>
                        ) : (
                          <div className="card-body">
                            <h5 id="show-trailer">Show Trailer</h5>
                            <iframe
                              src={ShowTrailer}
                              className="iframe"
                              title="This is a unique title prop"
                            />
                          </div>
                        )}
                      </React.Fragment>
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
