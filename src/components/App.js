import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import youtube from "../api/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "../styles/videoItem.css";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
    console.log("data: ", response);
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onTermSubmit("steve harvey");
  }

  render() {
    return (
      <div className="custom-bg">
        <div className="ui container space">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div className="ui stackable two column grid">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
