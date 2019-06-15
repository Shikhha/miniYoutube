import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import youtube from "../api/Youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = {
    videos: []
  };
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    console.log(response.data.items);
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
