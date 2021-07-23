import axios from "axios";

const api = axios.create({
  baseURL: "https://fortnite-api.theapinetwork.com/",
});

export default api;
