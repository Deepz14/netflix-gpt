import {useEffect} from "react";
import { AUTH_HEADER } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerMovie } from "../store/movieSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if(movieId){
            fetcMovieDetails()
        }
    }, [])
  
    const fetcMovieDetails = async() => {
      const respone = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos', {
        method: 'GET',
        headers: AUTH_HEADER
      });
      const result = await respone.json();
      const filterTrailer = result.results.filter((movie) => movie.type === 'Trailer');
      dispatch(addTrailerMovie(filterTrailer));
    }
}

export default useMovieTrailer;