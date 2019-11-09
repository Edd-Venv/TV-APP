import React, { createContext } from "react";
import Axios from "axios";

export const MovieSearchContext = createContext();

class MovieSearchContextProvider extends React.Component {
  state = {
    isLoaded: false,
    Movies: [],
    MovieTrailer: [],
    Test: [],
    display: " ",
    value: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    const apiKey = "728de06e";
    const url = `https://www.omdbapi.com/?t=${this.state.value}&apikey=${apiKey}`;
    Axios.get(url).then(response => {
      this.setState({
        isLoaded: true,
        Movies: response.data,
        display: "show",
        value: ""
      });
    });
    const apiKeyVideo = "341314-MusicApp-1I2LKOB1";
    const urlVideo = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${this.state.value}&type=movies&info=1&verbose=1&k=${apiKeyVideo}`;
    Axios.get(urlVideo).then(responseVideo => {
      this.setState({
        MovieTrailer: responseVideo.data.Similar.Info[0].yUrl,
        Test: responseVideo.data.Similar.Info[0].Type
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
      display: "hide",
      MovieTrailer: ""
    });
  };
  render() {
    return (
      <MovieSearchContext.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit,
          handleClick: this.handleClick
        }}
      >
        {this.props.children}
      </MovieSearchContext.Provider>
    );
  }
}
export default MovieSearchContextProvider;
