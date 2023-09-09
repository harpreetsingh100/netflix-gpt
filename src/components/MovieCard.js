import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className=" md:w-48 flex md:pr-4 mb-4 mt-4">
      <img src={IMG_CDN + posterPath} alt="Poster" />
    </div>
  );
};

export default MovieCard;
