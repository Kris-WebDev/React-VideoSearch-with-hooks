import axios from "axios";

const KEY = "AIzaSyDlnJntabOBgw9ZwCEydotyqF9yMoyLTsQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
