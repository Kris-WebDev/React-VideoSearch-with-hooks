import React from "react";
import "./VideoItem.css";

//Destructure props from VideoList.js. this replace calling it props.video etc..
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    //onClick is a function call to the prop onVideoSelect that passes the props.video as an argument
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <h5 className="header"> {video.snippet.title} </h5>
      </div>
    </div>
  );
};

export default VideoItem;
