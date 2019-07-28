import React from "react";
import Axios from "axios";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      Movies: [],
      Movies2: [],
      Movies3: [],
      Movies4: []
    };
  }

  async componentDidMount() {
    const apiKey = "";
    const url = `http://www.omdbapi.com/?t=Bohemian Rhapsody&apikey=${apiKey}`;
    Axios.get(url).then(response => {
      this.setState({
        isLoaded: true,
        Movies: response.data
      });
    });
    const url2 = `http://www.omdbapi.com/?t=A Star Is Born&apikey=${apiKey}`;
    Axios.get(url2).then(response => {
      this.setState({
        isLoaded: true,
        Movies2: response.data
      });
    });
    const url3 = `http://www.omdbapi.com/?t=Fantastic Beasts: The Crimes Of Grindelwald&apikey=${apiKey}`;
    Axios.get(url3).then(response => {
      this.setState({
        isLoaded: true,
        Movies3: response.data
      });
    });
    const url4 = `http://www.omdbapi.com/?t=Jurassic World: Fallen Kingdom&apikey=${apiKey}`;
    Axios.get(url4).then(response => {
        this.setState({
        isLoaded: true,
        Movies4: response.data
      });
    });
  }

  render() {
    const { Movies, Movies2, Movies3, Movies4 } = this.state;
    return (
      <React.Fragment>
        <div className="movieContainer">
          <div className="row">
            <div
              style={{
                width: "240px",
                boxSizing: "borderBox",
                marginLeft: "3%"
              }}
            >
              <img
                alt="loading"
                src={Movies.Poster}
                className="img-thumbnail"
                style={{ width: "250px", height: "auto" }}
                id="boxMovie"
                margin="auto"
              />
            </div>
            <div
              style={{
                width: "240px",
                boxSizing: "borderBox",
                marginLeft: "10%"
              }}
            >
              <img
                alt="loading"
                src={Movies2.Poster}
                className="img-thumbnail"
                style={{ width: "250px", height: "auto" }}
                id="boxMovie"
                margin="auto"
              />
            </div>
            <div
              style={{
                width: "240px",
                boxSizing: "borderBox",
                marginLeft: "10%"
              }}
            >
              <img
                alt="loading"
                src={Movies3.Poster}
                className="img-thumbnail"
                style={{ width: "250px", height: "auto" }}
                id="boxMovie"
                margin="auto"
              />
            </div>
            <div
              style={{
                width: "240px",
                boxSizing: "borderBox",
                marginLeft: "10%"
              }}
            >
              <img
                alt="loading"
                src={Movies4.Poster}
                className="img-thumbnail"
                style={{ width: "250px", height: "auto" }}
                id="boxMovie"
                margin="auto"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
