import React from "react";
import { TvContext } from "../../contexts/tvContext";
import "./Header.css";

class Header extends React.Component {
  static contextType = TvContext;

  render() {
    const {
      isLoaded,
      headerLink1,
      headerImage1,
      headerLink2,
      headerImage2,
      headerLink3,
      headerImage3,
      headerLink4,
      headerImage4
    } = this.context;

    return (
      <div className="flex-container">
        {isLoaded === false ? (
          <div
            className="spinner-grow text-dark"
            role="status"
            style={{ marginLeft: "1%" }}
          >
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <React.Fragment>
            <div className="header1">
              <a href={headerLink1} target="_blank" rel="noopener noreferrer">
                <img
                  alt="loading"
                  src={headerImage1.original}
                  className="img-thumbnail"
                  id="box"
                />
              </a>
            </div>
            <div className="header2">
              <a href={headerLink2} target="_blank" rel="noopener noreferrer">
                <img
                  alt="loading"
                  src={headerImage2.original}
                  className="img-thumbnail"
                  id="box"
                />
              </a>
            </div>
            <div className="header3">
              <a href={headerLink3} target="_blank" rel="noopener noreferrer">
                <img
                  alt="loading"
                  src={headerImage3.original}
                  className="img-thumbnail"
                  id="box"
                />
              </a>
            </div>
            <div className="header4">
              <a href={headerLink4} target="_blank" rel="noopener noreferrer">
                <img
                  alt="loading"
                  src={headerImage4.original}
                  className="img-thumbnail"
                  id="box"
                />
              </a>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}
export default Header;
