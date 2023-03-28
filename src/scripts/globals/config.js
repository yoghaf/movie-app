require("dotenv").config();
const KEY = process.env.KEY;
const BASE_URL = process.env.BASE_URL;
const CONFIG = {
  KEY: KEY,
  BASE_URL: BASE_URL,
  BASE_IMAGE_URL: "https://image.tmdb.org/t/p/w500/",
  DEFAULT_LANGUAGE: "en-us",
};

export default CONFIG;
