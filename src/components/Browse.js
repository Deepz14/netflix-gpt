import Navbar from "./Navbar";
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import CardContainer from "./CardContainer";

const Browse = () => {

  useNowPlayingMovies();

    return (
        <div className="bg-black text-white">
          <MainContainer />
          <CardContainer />
        </div>
    )
}

export default Browse;