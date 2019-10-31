import React from "react";
import "./Search.css";

class FetalSearchError extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <React.Fragment>
        <span onClick={handleClick} className="close" id="error-close-button">
          ×
        </span>
        <p id="error-paragraph">Sorry Show Not In DataBase</p>
      </React.Fragment>
    );
  }
}

export default FetalSearchError;
