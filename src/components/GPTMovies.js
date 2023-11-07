import { useSelector } from "react-redux";
import useSearchMovie from "../hooks/useSearchMovie";
import ShimmerCard from "./ShimmerCard";
import NoResults from "./NoResults";
import GPTMovieSuggestion from "./GPTMovieSuggestion";

const GPTMovies = () => {
    const searchMovieQuery = useSelector((state) => state.searchMovies.searchMovieQuery);
    const searchMoviesList = useSelector((state) => state.searchMovies.movieResults);
    const shimmerLoad = useSelector((state) => state.searchMovies.shimmerLoad);
    useSearchMovie(searchMovieQuery);

    return(
        <div className="bg-black pt-5 min-h-[100vh]">
            {
               searchMoviesList.length == 0 ? (searchMovieQuery && searchMoviesList.length === 0 && !shimmerLoad) ? (
                    <div className="mt-[60px] ">
                        <NoResults searchQuery={searchMovieQuery} />
                    </div>
                ) : (<ShimmerCard />) :
                (
                    <div className="grid grid-cols-12 px-12 mx-10 mt-[60px] pt-8 pb-3">
                        {
                            searchMoviesList.map((movie) =>( <GPTMovieSuggestion key={movie?.id} info={movie} />))
                        }
                    </div>
                )
            }
        </div>
    )
}


export default GPTMovies;