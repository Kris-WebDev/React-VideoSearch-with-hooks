import { useState, useEffect } from "react";
import youtube from "../Api/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  // equivalent of componentDidmount. only run once depending on the 2nd argument
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  //  API call from the youtube.js which already have the stardarn API call parameters
  const search = async (term) => {
    //Needs to have Async to mimic the fetch request promise thing
    const res = await youtube.get("/search", {
      //needs to have the await and assign it to a variable. the youtube.get is basicall appending additional parameters
      params: {
        q: term,
      },
    });

    // setting state of the videos to the API call data.items
    setVideos(res.data.items);
  };

  return [videos, search];
};

export default useVideos;
