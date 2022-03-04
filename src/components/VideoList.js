import React from "react";
import VideoItem from "./VideoItem";

//Destructure of the props from the App.js this replace calling it props.video etc
const VideoList = ({ videos, onVideoSelect }) => {
  //setting the a variable = to the incoming props which is Videos and mapping it individualy then returning it
  const renderList = videos.map((video) => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        video={video}
        key={video.id.videoId}
      />
    );
  });

  //getting the list of videos assigned to the variable Renderlist and returning it
  return (
    <div className="ui segment">
      <div className="ui relaxed divided list">{renderList}</div>
    </div>
  );
};

export default VideoList;
