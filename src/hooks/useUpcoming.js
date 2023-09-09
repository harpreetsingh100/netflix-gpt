import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcoming } from "../redux/filmSlice";

const useUpcoming = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.film.upcomingMovies);

  const getUpcoming = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addUpcoming(data.results));
  };

  useEffect(() => {
    !upcomingMovies && getUpcoming();
  }, []);
};

export default useUpcoming;
