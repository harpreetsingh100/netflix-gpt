import React from "react";

import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.film.nowPlayingMovies);
  const popular = useSelector((store) => store.film.popularMovies);
  const topRated = useSelector((store) => store.film.topRatedMovies);
  const upcoming = useSelector((store) => store.film.upcomingMovies);
  if (movies === null) return;
  return (
    movies && (
      <div className=" bg-black pr-2 md:pr-0 ">
        <div className="mt-0 sm:mt-0 md:mt-[0] lg:mt-[-180px] xl:mt-[-250px] relative z-10 px-2 md:pl-0 pb-12">
          <MovieList title={"Now Playing"} data={movies} />
          <MovieList title={"Top Rated"} data={topRated} />
          <MovieList title={"Popular"} data={popular} />
          <MovieList title={"Upcoming"} data={upcoming} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
