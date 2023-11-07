import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieResults, enableShimmerLoad, disableShimmerLoad } from "../store/searchSlice";
import { AUTH_HEADER, SEARCH_MOVIES_API } from "../utils/constants";

const useSearchMovie = (searchMovieQuery) => {
   const dispatch = useDispatch();
    useEffect(() => {
        dispatch(enableShimmerLoad());
        dispatch(addMovieResults([]));
        // debounce handler
        const fetchMoviesTimer = setTimeout(() => {
            if(searchMovieQuery) fetchMovies();
        }, 200);
        
        return () => {
            clearTimeout(fetchMoviesTimer);
            dispatch(disableShimmerLoad());
        }
    }, [searchMovieQuery]);

    const fetchMovies = async() => {
        console.log("fetchMovies");
        const getMovies =  await fetch(SEARCH_MOVIES_API + "query=" + searchMovieQuery +"&page=1", {
            method: 'GET',
            headers: AUTH_HEADER
        });
        const response = await getMovies.json();
        console.log("responses: ", response);
        dispatch(addMovieResults(response.results));
        dispatch(disableShimmerLoad());
    }
}

export default useSearchMovie;