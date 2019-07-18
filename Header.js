import React from "react";
import axios from "axios";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: [],
      image1: [],
      image2: [],
      image3: [],
      image4: [],
      link1: [],
      link2: [],
      link3: [],
      link4: []
    };
  }
  async componentDidMount() {
    const url = `http://api.tvmaze.com/shows/54`;
    await axios.get(url).then(response => {
      this.setState({
        data: response.data,
        image1: response.data.image,
        isLoaded: true,
        link1: response.data.officialSite
      });
    });
    const url2 = `http://api.tvmaze.com/shows/11`;
    await axios.get(url2).then(response => {
      this.setState({
        data: response.data,
        image2: response.data.image,
        isLoaded: true,
        link2: response.data.officialSite
      });
    });
    const url3 = `http://api.tvmaze.com/shows/52`;
    await axios.get(url3).then(response => {
      this.setState({
        data: response.data,
        image3: response.data.image,
        isLoaded: true,
        link3: response.data.officialSite
      });
    });
    const url4 = `http://api.tvmaze.com/shows/7`;
    await axios.get(url4).then(response => {
      this.setState({
        data: response.data,
        image4: response.data.image,
        isLoaded: true,
        link4: response.data.officialSite
      });
    });
  }

  render() {
    const {
      data,
      isLoaded,
      image1,
      image2,
      image3,
      image4,
      link1,
      link2,
      link3,
      link4
    } = this.state;
    return (
      <div>
        {isLoaded === false ? (
          <div
            class="spinner-grow text-dark"
            role="status"
            style={{ marginLeft: "50%" }}
          >
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          <React.Fragment>
            <span
              style={{
                width: "100px",
                height: "100px",
                position: "relative",
                animationName: "first",
                animationDuration: "4s",
                animationIterationCount: "1",
                animationTimingFunction: "ease",
                animationFillMode: "forwards",
                animationDelay: "-0.5s"
              }}
            >
              <a href={link1} target="_blank">
                <img
                  alt="loading"
                  src={image1.original}
                  className="img-thumbnail"
                  style={{ width: "170px" }}
                />
              </a>
            </span>
            <span
              style={{
                width: "100px",
                height: "100px",
                position: "relative",
                animationName: "second",
                animationDuration: "4s",
                animationIterationCount: "1",
                animationTimingFunction: "ease",
                animationFillMode: "forwards",
                animationDelay: "-0.5s"
              }}
            >
              <a href={link2} target="_blank">
                <img
                  alt="loading"
                  src={image2.original}
                  className="img-thumbnail"
                  style={{ width: "170px" }}
                />
              </a>
            </span>
            <span
              style={{
                width: "100px",
                height: "100px",
                position: "relative",
                marginLeft: "30%",
                animationName: "third",
                animationDuration: "4s",
                animationIterationCount: "1",
                animationTimingFunction: "ease",
                animationFillMode: "forwards",
                animationDelay: "-0.5s"
              }}
            >
              <a href={link3} target="_blank">
                <img
                  alt="loading"
                  src={image3.original}
                  className="img-thumbnail"
                  style={{ width: "170px" }}
                />
              </a>
            </span>
            <span
              style={{
                width: "100px",
                height: "100px",
                position: "relative",
                marginLeft: "5%",
                animationName: "fouth",
                animationDuration: "4s",
                animationIterationCount: "1",
                animationTimingFunction: "ease",
                animationFillMode: "forwards",
                animationDelay: "-0.5s"
              }}
            >
              <a href={link4} target="_blank">
                <img
                  alt="loading"
                  src={image4.original}
                  className="img-thumbnail"
                  style={{ width: "170px" }}
                />
              </a>
            </span>
          </React.Fragment>
        )}
      </div>
    );
  }
}
export default Header;
