import axios from "axios";

const KEY = "AIzaSyDF0RLFJChfs05skX_SR6dAIA5XD2v8MI0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
