import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, data }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-2xl font-bold py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex">
          {data.map((elem) => {
            return <MovieCard posterPath={elem.poster_path} key={elem.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
