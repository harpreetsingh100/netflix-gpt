import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcoming } from "../redux/filmSlice";

const useUpcoming = () => {
  const dispatch = useDispatch();

  const getUpcoming = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addUpcoming(data.results));
  };

  useEffect(() => {
    getUpcoming();
  }, []);
};

export default useUpcoming;
