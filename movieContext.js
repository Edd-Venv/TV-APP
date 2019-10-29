import React, { createContext } from "react";
import Axios from "axios";

export const MovieContext = createContext();

class MovieContextProvider extends React.Component {
  state = {
    isLoaded: false,
    Movies: [],
    Movies2: [],
    Movies3: [],
    Movies4: []
  };

  async componentDidMount() {
    document.title = "Home Page";
    const apiKey = "728de06e";
    const url = `https://www.omdbapi.com/?t=Bohemian Rhapsody&apikey=${apiKey}`;
    Axios.get(url).then(response => {
      this.setState({
        isLoaded: true,
        Movies: response.data
      });
    });
    const url2 = `https://www.omdbapi.com/?t=A Star Is Born&apikey=${apiKey}`;
    Axios.get(url2).then(response => {
      this.setState({
        isLoaded: true,
        Movies2: response.data
      });
    });
    const url3 = `https://www.omdbapi.com/?t=Fantastic Beasts: The Crimes Of Grindelwald&apikey=${apiKey}`;
    Axios.get(url3).then(response => {
      this.setState({
        isLoaded: true,
        Movies3: response.data
      });
    });
    const url4 = `https://www.omdbapi.com/?t=Jurassic World: Fallen Kingdom&apikey=${apiKey}`;
    Axios.get(url4).then(response => {
      this.setState({
        isLoaded: true,
        Movies4: response.data
      });
    });
  }
  render() {
    return (
      <MovieContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </MovieContext.Provider>
    );
  }
}
export default MovieContextProvider;
