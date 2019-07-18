import React from "react";
import Axios from "axios";

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
    const url = `http://api.tvmaze.com/shows/30`;
    await Axios.get(url).then(response => {
      //response.data.slice(0, 5)
      //American horror story
      //console.log(response.data.officialSite);
      this.setState({
        isLoaded: true,
        data: response.data,
        image: response.data.image,
        Link: response.data.officialSite
      });
    });
    const url1 = `http://api.tvmaze.com/shows/128`;
    await Axios.get(url1).then(response => {
      //console.log(response.data.officialSite);
      this.setState({
        isLoaded: true,
        data: response.data,
        image1: response.data.image,
        Link1: response.data.officialSite
      });
    });
    const url2 = `http://api.tvmaze.com/shows/50`;
    await Axios.get(url2).then(response => {
      //console.log(response.data.officialSite);
      this.setState({
        isLoaded: true,
        data: response.data,
        image2: response.data.image,
        Link2: response.data.officialSite
      });
    });
    const url3 = `http://api.tvmaze.com/shows/58`;
    await Axios.get(url3).then(response => {
      //console.log(response.data.officialSite);
      this.setState({
        isLoaded: true,
        data: response.data,
        image3: response.data.image,
        Link3: response.data.officialSite
      });
    });
  }

  render() {
    const {
      image,
      image1,
      image2,
      image3,
      Link,
      Link1,
      Link2,
      Link3,
      isLoaded
    } = this.state;
    return (
      <React.Fragment>
        {isLoaded === false ? (
          <div
            class="spinner-grow text-dark"
            role="status"
            style={{ marginLeft: "50%" }}
          >
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          <span>
            <span
              style={{
                width: "100px",
                height: "100px",
                position: "relative",
                animationName: "firstBODY",
                animationDuration: "4s",
                animationIterationCount: "1",
                animationTimingFunction: "ease",
                animationFillMode: "forwards",
                animationDelay: "-0.5s"
              }}
            >
              <a href={Link} target="_blank">
                <img
                  alt="loading"
                  src={image.original}
                  className="img-thumbnail"
                  style={{ width: "170px" }}
                  id="body1"
                />
              </a>
            </span>
            <span
              style={{
                width: "100px",
                height: "100px",
                position: "relative",
                animationName: "secondBODY",
                animationDuration: "4s",
                animationIterationCount: "1",
                animationTimingFunction: "ease",
                animationFillMode: "forwards",
                animationDelay: "-0.5s"
              }}
            >
              <a href={Link1} target="_blank">
                <img
                  alt="loading"
                  src={image1.original}
                  className="img-thumbnail"
                  style={{ width: "170px" }}
                  id="body1"
                />
              </a>
            </span>
            <span
              style={{
                width: "100px",
                height: "100px",
                position: "relative",
                animationName: "fouthBODY",
                animationDuration: "4s",
                animationIterationCount: "1",
                animationTimingFunction: "ease",
                animationFillMode: "forwards",
                animationDelay: "-0.5s"
              }}
            >
              <a href={Link3} target="_blank">
                <img
                  alt="loading"
                  src={image3.original}
                  className="img-thumbnail"
                  style={{ width: "170px" }}
                  id="body1"
                />
              </a>
            </span>
          </span>
        )}
      </React.Fragment>
    );
  }
}

export default Body;
