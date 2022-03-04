import React from "react";

const VideoDetails = ({ video }) => {
  //If the props.video is empty or null return a loading. because user havent put a search query yet
  if (!video) {
    return <div className="ui text loader">Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  // User put a query and props.video has a value
  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe src={videoSrc} title="Video player" />
      </div>
      <div className="content">
        <p></p>
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
