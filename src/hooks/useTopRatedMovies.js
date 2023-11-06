import {useEffect} from "react";
import { AUTH_HEADER } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovie } from "../store/movieSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchRatedMovies()
    }, [])
  
    const fetchRatedMovies = async() => {
      const respone = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', {
        method: 'GET',
        headers: AUTH_HEADER
      });
      const result = await respone.json();
      dispatch(addTopRatedMovie(result.results));
    }
}

export default useTopRatedMovies;