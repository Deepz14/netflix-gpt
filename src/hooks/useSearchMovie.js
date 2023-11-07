import { useEffect } from "react";


const useSearchMovie = (searchMovieQuery) => {
    console.log("SearchMovieQuery: ", searchMovieQuery);

    useEffect(() => {
        if(searchMovieQuery) console.log("fetchMovies");
    }, [searchMovieQuery]);

    const fetchMovies = async() => {

    }
}

export default useSearchMovie;