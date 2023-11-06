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
        <div className="ml-8 pl-5 card-container">
            <div className="text-white">
                <MovieList title={"Popular Movies"} movies={popularMovies} />
            </div>
            <MovieList title={"Now Playing Movies"} movies={nowPlayingMovies} />
            <MovieList title={"Top Rated Movies"} movies={topRatedMovies} />
            <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
        </div>
    )
}

export default CardContainer;