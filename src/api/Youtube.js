import axios from "axios";
const KEY = "AIzaSyBrCYjxTgYp_ZaJFhBILzsKLANY54Q2mdY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
