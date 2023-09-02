import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-[200px] flex pr-4">
      <img src={IMG_CDN + posterPath} alt="Poster" />
    </div>
  );
};

export default MovieCard;
