import Navbar from "./Navbar";
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {

  useNowPlayingMovies();

    return (
        <div>
          <Navbar />
          <MainContainer />
        </div>
    )
}

export default Browse;