import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRated } from "../redux/filmSlice";

const useTopRated = () => {
  const dispatch = useDispatch();

  const getTopRated = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addTopRated(data.results));
  };

  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRated;
