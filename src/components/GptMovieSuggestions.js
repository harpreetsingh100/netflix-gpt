import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="h-auto bg-black">
      {movieNames.map((movieNames, i) => {
        return (
          <MovieList
            key={movieNames}
            title={movieNames}
            data={movieResults[i]}
          />
        );
      })}
    </div>
  );
};

export default GptMovieSuggestions;
