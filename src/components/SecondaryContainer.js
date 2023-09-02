import React from "react";

import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.film.nowPlayingMovies);
  if (movies === null) return;
  return (
    <div className=" bg-black">
      <div className="-mt-52 relative z-10 pl-12">
        <MovieList title={"Now Playing"} data={movies} />
        <MovieList title={"Trending"} data={movies} />
        <MovieList title={"Popular"} data={movies} />
        <MovieList title={"Upcoming"} data={movies} />
        <MovieList title={"Horror"} data={movies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
