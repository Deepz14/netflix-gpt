import Movie from "./Movie";

const MovieList = ({title, movies}) => {
    return (
        <div className="movieList-wrapper ml-5 pl-2">
            <h1 className="text-xl font-bold my-3 pl-1">{title}</h1>
            <div className="movie-card-wrapper">
                {
                    movies.map((movie) =>( <Movie key={movie?.id} info={movie} />))
                }
            </div>
        </div>
    )
}

export default MovieList;