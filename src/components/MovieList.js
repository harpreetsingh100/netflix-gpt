import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, data }) => {
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-2xl font-bold py-4 text-white text-center md:text-left">
        {title}
      </h1>
      <div className="flex  md:overflow-x-scroll flex-col md:flex-row">
        <div className="md:flex">
          {data &&
            data.map((elem) => {
              return <MovieCard posterPath={elem.poster_path} key={elem.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
