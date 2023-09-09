import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRated } from "../redux/filmSlice";

const useTopRated = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.film.topRatedMovies);

  const getTopRated = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addTopRated(data.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRated();
  }, []);
};

export default useTopRated;
