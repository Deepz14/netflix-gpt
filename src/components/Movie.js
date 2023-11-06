import { CARD_MOVIE_DB_IMAGE_PATH } from "../utils/constants";

const Movie = ({info}) => {
    return (
        <div className="movie-card">
            <img className="rounded" src={CARD_MOVIE_DB_IMAGE_PATH + info?.poster_path} alt="movie-card-img" />
        </div>
    )
}

export default Movie;