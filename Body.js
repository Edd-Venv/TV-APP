import React from "react";
import Axios from "axios";
import "./Body.css";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: [],
      image: [],
      image1: [],
      image2: [],
      image3: [],
      Link: [],
      Link1: [],
      Link2: [],
      Link3: []
    };
  }

  async componentDidMount() {
    const url = `https://cors-anywhere.herokuapp.com/https://api.tvmaze.com/shows/30`;
    await Axios.get(url).then(response => {
      this.setState({
        isLoaded: true,
        data: response.data,
        image: response.data.image,
        Link: response.data.officialSite
      });
    });
    const url1 = `https://cors-anywhere.herokuapp.com/https://api.tvmaze.com/shows/128`;
    await Axios.get(url1).then(response => {
      this.setState({
        isLoaded: true,
        data: response.data,
        image1: response.data.image,
        Link1: response.data.officialSite
      });
    });
    const url2 = `https://cors-anywhere.herokuapp.com/https://api.tvmaze.com/shows/50`;
    await Axios.get(url2).then(response => {
      this.setState({
        isLoaded: true,
        data: response.data,
        image2: response.data.image,
        Link2: response.data.officialSite
      });
    });
    const url3 = `https://cors-anywhere.herokuapp.com/https://api.tvmaze.com/shows/58`;
    await Axios.get(url3).then(response => {
      this.setState({
        isLoaded: true,
        data: response.data,
        image3: response.data.image,
        Link3: response.data.officialSite
      });
    });
  }

  render() {
    const { image, image1, image3, Link, Link1, Link3, isLoaded } = this.state;
    return (
      <React.Fragment>
        <div className="flex-containerBody">
          {isLoaded === false ? (
            <div
              className="spinner-grow text-dark"
              role="status"
              style={{ marginLeft: "50%" }}
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <React.Fragment>
              <div className="body1">
                <a href={Link} target="_blank" rel="noopener noreferrer">
                  <img
                    alt="loading"
                    src={image.original}
                    className="img-thumbnail"
                    id="box"
                  />
                </a>
              </div>
              <div className="body2">
                <a href={Link1} target="_blank" rel="noopener noreferrer">
                  <img
                    alt="loading"
                    src={image1.original}
                    className="img-thumbnail"
                    id="box"
                  />
                </a>
              </div>
              <div className="body3">
                <a href={Link3} target="_blank" rel="noopener noreferrer">
                  <img
                    alt="loading"
                    src={image3.original}
                    className="img-thumbnail"
                    id="box"
                  />
                </a>
              </div>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Body;
