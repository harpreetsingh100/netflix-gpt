import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
