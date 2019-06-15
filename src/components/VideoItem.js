import "../styles/videoItem.css";
import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div className="video-item item">
      <img className="ui image" src={video.snippet.thumbnails.default.url} />
      <div className="content">
        <a className="header">{video.snippet.title}</a>
      </div>
    </div>
  );
};

export default VideoItem;
