import { useSelector } from "react-redux";
import useSearchMovie from "../hooks/useSearchMovie";
import ShimmerCard from "./ShimmerCard";



const GPTMovies = () => {
    const searchMovieQuery = useSelector((state) => state.searchMovies.searchMovieQuery);
    useSearchMovie(searchMovieQuery);
    return(
        <div className="bg-black pt-5 h-auto">
            <ShimmerCard />
            
        </div>
    )
}


export default GPTMovies;