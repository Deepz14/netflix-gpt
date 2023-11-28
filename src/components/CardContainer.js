import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const CardContainer = () => {
    usePopularMovies();
    useNowPlayingMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    
    const popularMovies = useSelector((state) => state.movies.popularMovie);
    const nowPlayingMovies = useSelector((state) => state.movies.nowPlaying);
    const topRatedMovies = useSelector((state) =>  state.movies.topRatedMovie);
    const upcomingMovies = useSelector((state) => state.movies.upcomingMovie);
    return (
        <div className="card-container p-3">
            <div className="pl-5">
                <div className="text-white relative">
                    <MovieList cat={"mvct1"} title={"Popular Movies"} movies={popularMovies} />
                </div>
                <div className="relative">   
                    <MovieList cat={"mvct2"} title={"Now Playing Movies"} movies={nowPlayingMovies} />
                </div>
                <div className="relative">
                    <MovieList cat={"mvct3"} title={"Top Rated Movies"} movies={topRatedMovies} />
                </div>
                <div className="relative">
                    <MovieList cat={"mvct4"} title={"Upcoming Movies"} movies={upcomingMovies} />
                </div>
            </div>
        </div>
    )
}

export default CardContainer;