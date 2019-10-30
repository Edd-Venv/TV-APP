import React from "react";
import "./Search.css";
import { TvSearchContext } from "../../contexts/tvSearchContext";
import SearchResult from "./SearchResult";

class Search extends React.Component {
  static contextType = TvSearchContext;
  render() {
    const {
      data,
      isLoaded,
      image,
      display,
      summary,
      Test,
      ShowTrailer,
      handleSubmit,
      handleChange,
      handleClick,
      value
    } = this.context;
    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        <br />
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
              placeholder="Show Title"
              style={{ width: "35%", fontSize: "1.2em" }}
              id="input"
            />
          </span>
        </form>
        <br />
        <br />
        <SearchResult
          data={data}
          isLoaded={isLoaded}
          image={image}
          display={display}
          summary={summary}
          Test={Test}
          ShowTrailer={ShowTrailer}
          handleClick={handleClick}
        />
      </React.Fragment>
    );
  }
}

export default Search;
