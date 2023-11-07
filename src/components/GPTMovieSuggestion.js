import { CARD_MOVIE_DB_IMAGE_PATH } from "../utils/constants"

const GPTMovieSuggestion = ({info}) => {
    return(
        info?.poster_path ? (
            <div className="col-span-2 m-3 movie-suggestion-card cursor-pointer">
                <img className="h-full w-full rounded" src={CARD_MOVIE_DB_IMAGE_PATH + info?.poster_path} alt="movie-card-img" />
            </div>
        ) : ""
    )
}

export default GPTMovieSuggestion