import React, { useEffect } from "react";
import Header from "../components/Header";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/filmSlice";

const Browse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addNowPlayingMovies(data));
  };
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
