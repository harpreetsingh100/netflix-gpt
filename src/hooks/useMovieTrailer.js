import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerId } from "../redux/filmSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerId = useSelector((store) => store.film.trailerId);

  useEffect(() => {
    !trailerId && getVideos();
  }, []);

  const getVideos = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await res.json();

    const filterData = data.results.filter((v) => {
      return v.type === "Trailer";
    });

    const trailer = filterData.length ? filterData[0] : data.results[0];
    dispatch(addTrailerId(trailer?.key));
  };
};

export default useMovieTrailer;
