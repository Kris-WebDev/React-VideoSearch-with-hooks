import React, { useState, useEffect } from "react";
import VideoList from "./VideoList";
import Searchbar from "./SearchBar";
import VideoDetails from "./VideoDetails";
import useVideos from "../Hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  // this is custom hook. its like useState. the arrays are return variable from the custom hook
  const [videos, search] = useVideos("enemies arcane");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <Searchbar onFormSubmit={search} />

      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
