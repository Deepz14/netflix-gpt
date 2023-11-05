import { useState } from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from 'react-redux';
import { WATCH_URL } from "../utils/constants";

const VideoBackground = ({movieId}) => {
    const movieTrailer = useSelector((state) => state.movies.trailerMovie);
    const currentMovie = movieTrailer.length > 0 ? movieTrailer[0] : movieTrailer;
    useMovieTrailer(movieId);
    return  (
        <div className="w-full">
            <iframe className="w-full aspect-video" src={WATCH_URL + currentMovie?.key + "?si=" + currentMovie?.id} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>
        </div>
    )
}

export default VideoBackground;