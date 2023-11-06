import {useEffect} from "react";
import { AUTH_HEADER } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovie } from "../store/movieSlice";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchUpcomingMovies()
    }, [])
  
    const fetchUpcomingMovies = async() => {
      const respone = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', {
        method: 'GET',
        headers: AUTH_HEADER
      });
      const result = await respone.json();
      dispatch(addUpcomingMovie(result.results));
    }
}

export default useUpcomingMovies;