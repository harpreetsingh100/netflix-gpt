import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-[112px] sm:w-40 md:w-52 flex mb-4 mt-4 mr-6 ">
      <img src={IMG_CDN + posterPath} alt="Poster" />
    </div>
  );
};

export default MovieCard;
