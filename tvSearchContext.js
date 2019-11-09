import React, { createContext } from "react";
import Axios from "axios";

export const TvSearchContext = createContext();

class TvSearchContextProvider extends React.Component {
  state = {
    isLoaded: false,
    value: "",
    data: [],
    image: [],
    display: "hide",
    ShowTrailer: [],
    Test: [],
    summary: []
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const url = `https://cors-anywhere.herokuapp.com/https://api.tvmaze.com/search/shows?q=${this.state.value}&embed=seasons`;
    Axios.get(url).then(response => {
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
          .replace(/i>/g, " ")
          .replace(/b>/g, " ")
          .substring(0, 250),
        value: ""
      });
    });
    const apiKeyShow = "341314-MusicApp-1I2LKOB1";
    const urlShow = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${this.state.value}&type=shows&info=1&verbose=1&k=${apiKeyShow}`;
    Axios.get(urlShow).then(responseShow => {
      console.log(responseShow.data.Similar.Info[0]);
      this.setState({
        ShowTrailer: responseShow.data.Similar.Info[0].yUrl,
        Test: responseShow.data.Similar.Info[0].Type
      });
    });
  };
  handleClick = event => {
    this.setState({
      display: "hide",
      ShowTrailer: ""
    });
  };
  render() {
    return (
      <TvSearchContext.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit,
          handleClick: this.handleClick
        }}
      >
        {this.props.children}
      </TvSearchContext.Provider>
    );
  }
}
export default TvSearchContextProvider;
