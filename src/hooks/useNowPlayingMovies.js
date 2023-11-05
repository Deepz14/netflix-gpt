import {useEffect} from "react";
import { AUTH_HEADER } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../store/movieSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      fetchPopularMovies()
    }, [])
  
    const fetchPopularMovies = async() => {
      const respone = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', {
        method: 'GET',
        headers: AUTH_HEADER
      });
      const result = await respone.json();
      dispatch(addNowPlaying(result.results));
    }
}

export default useNowPlayingMovies;