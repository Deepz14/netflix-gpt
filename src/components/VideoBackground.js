import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from 'react-redux';
import { MOVIE_DB_IMAGE_PATH, WATCH_URL } from "../utils/constants";

const VideoBackground = ({movieId, posterPath}) => {
    const movieTrailer = useSelector((state) => state.movies.trailerMovie);
    const currentMovie = movieTrailer.length > 0 ? movieTrailer[0] : movieTrailer;
    useMovieTrailer(movieId);
    return  (
        <div className="w-full video-bg-container">
            {/* <iframe className="w-full aspect-video" src={WATCH_URL + currentMovie?.key + "?si=" + currentMovie?.id + "&autoplay=1&mute=1&controls=0"} 
               >
            </iframe> */}
            <img className="w-full" src={MOVIE_DB_IMAGE_PATH + posterPath} alt="bg-img" />
        </div>
    )
}

export default VideoBackground;