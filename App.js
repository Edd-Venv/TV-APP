import React from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header.js";
import Search from "./components/Search.js";
import Body from "./components/Body.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <h2
          style={{
            marginLeft: "43%",
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
        <br />
        <Body />
        <Search />
        <h2
          style={{
            marginLeft: "40%",
            fontSize: "1.5em",
            fontWeight: "bolder",
            color: "white"
          }}
        >
          CURRENT TOP FOUR SHOWS
        </h2>
      </React.Fragment>
    );
  }
}

export default App;
