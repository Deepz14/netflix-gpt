import {useEffect} from "react";
import { AUTH_HEADER } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../store/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      fetchPopularMovies()
    }, [])
  
    const fetchPopularMovies = async() => {
      const respone = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', {
        method: 'GET',
        headers: AUTH_HEADER
      });
      const result = await respone.json();
      dispatch(addPopularMovie(result.results));
    }
}

export default usePopularMovies;