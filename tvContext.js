import React, { createContext } from "react";
import axios from "axios";

export const TvContext = createContext();

class TvContextProvider extends React.Component {
  state = {
    isLoaded: false,
    headerData: [],
    headerImage1: [],
    headerImage2: [],
    headerImage3: [],
    headerImage4: [],
    headerLink1: [],
    headerLink2: [],
    headerLink3: [],
    headerLink4: [],
    BodyData: [],
    BodyImage: [],
    BodyImage1: [],
    BodyImage2: [],
    BodyImage3: [],
    BodyLink: [],
    BodyLink1: [],
    BodyLink2: [],
    BodyLink3: []
  };
  async componentDidMount() {
    document.title = "Home Page";
    const url = ``;
    await axios.get(url).then(response => {
      this.setState({
        headerData: response.data,
        headerImage1: response.data.image,
        isLoaded: true,
        headerLink1: response.data.officialSite
      });
    });
    const url2 = ``;
    await axios.get(url2).then(response => {
      this.setState({
        headerData: response.data,
        headerImage2: response.data.image,
        isLoaded: true,
        headerLink2: response.data.officialSite
      });
    });
    const url3 = ``;
    await axios.get(url3).then(response => {
      this.setState({
        headerData: response.data,
        headerImage3: response.data.image,
        isLoaded: true,
        headerLink3: response.data.officialSite
      });
    });
    const url4 = ``;
    await axios.get(url4).then(response => {
      this.setState({
        headerData: response.data,
        headerImage4: response.data.image,
        isLoaded: true,
        headerLink4: response.data.officialSite
      });
    });

    /*BODY CONTEXT API BELOW */

    const url11 = ``;
    await axios.get(url11).then(response => {
      this.setState({
        isLoaded: true,
        BodyData: response.data,
        BodyImage: response.data.image,
        BodyLink: response.data.officialSite
      });
    });
    const url12 = ``;
    await axios.get(url12).then(response => {
      this.setState({
        isLoaded: true,
        BodyData: response.data,
        BodyImage1: response.data.image,
        BodyLink1: response.data.officialSite
      });
    });
    const url13 = ``;
    await axios.get(url13).then(response => {
      this.setState({
        isLoaded: true,
        BodyData: response.data,
        BodyImage2: response.data.image,
        BodyLink2: response.data.officialSite
      });
    });
    const url14 = ``;
    await axios.get(url14).then(response => {
      this.setState({
        isLoaded: true,
        BodyData: response.data,
        BodyImage3: response.data.image,
        BodyLink3: response.data.officialSite
      });
    });
  }

  render() {
    return (
      <TvContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </TvContext.Provider>
    );
  }
}
export default TvContextProvider;
