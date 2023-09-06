export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "1",
    name: "English",
  },
  {
    identifier: "2",
    name: "Hindi",
  },
  {
    identifier: "3",
    name: "Spanish",
  },
];
