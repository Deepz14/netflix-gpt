import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from 'react-redux';
import { BG_MOVIE_DB_IMAGE_PATH, WATCH_URL } from "../utils/constants";

const VideoBackground = ({movieId, posterPath}) => {
    const movieTrailer = useSelector((state) => state.movies.trailerMovie);
    const currentMovie = movieTrailer.length > 0 ? movieTrailer[0] : movieTrailer;
    useMovieTrailer(movieId);
    return  (
        <div className="h-5">
            <iframe className="w-full aspect-video" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                src={WATCH_URL + currentMovie?.key + "?si=" + currentMovie?.id + "&autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&rel=0&overlay=false&playlist=" + currentMovie?.key} 
               >
            </iframe>
            {/* <img className="" src={BG_MOVIE_DB_IMAGE_PATH + posterPath} alt="bg-img" /> */}
        </div>
    )
}

export default VideoBackground;