import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Search from "./components/Search/Search.js";
import Body from "./components/Body/Body.js";
import MovieSearch from "./components/MovieSearch/MovieSearch.js";
import Movies from "./components/Movies/Movies.js";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            maxWidth: "1000px",
            minWidth: "50%",
            margin: "0 auto"
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "1.5em",
              fontWeight: "bolder",
              color: "white"
            }}
          >
            TRENDING SHOWS
          </h2>
          <br />
          <br />
          <Header />
          <br />
          <Body />

          <br />
          <br />
          <Search />

          <h2
            style={{
              textAlign: "center",
              fontSize: "1.5em",
              fontWeight: "bolder",
              color: "white"
            }}
          >
            TOP MOVIES
          </h2>
          <br />
          <br />
          <Movies />
          <br />
          <br />
          <br />

          <br />
          <MovieSearch />
          <br />
          <br />
          <h2
            style={{
              textAlign: "center",
              fontSize: "1.5em",
              fontWeight: "bolder",
              color: "white"
            }}
          >
            CURRENT TOP FOUR SHOWS
          </h2>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
