import Movie from "./Movie";

const MovieList = ({title, movies, cat}) => {

    const handlerSliderLeft = (currSlider) => {
        let container = document.querySelector(`#${currSlider}`);
        container.scrollTo({
            left:container.scrollLeft - 200,
            top: 0,
            behavior: "smooth"
        });
    }

    const handlerSliderRight = (currSlider) => {
        let container = document.querySelector(`#${currSlider}`);
        container.scrollTo({
            left:container.scrollLeft + 200,
            top: 0,
            behavior: "smooth"
        });
    }

    const movieListHoverOn = (currSlider) => {
        let elements = document.querySelectorAll(`#slider-${currSlider}`);
        elements.forEach((element) => element.classList.add('showOpacity'));
    }

    const movieListHoverOff = (currSlider) => {
        let elements = document.querySelectorAll(`#slider-${currSlider}`);
        elements.forEach((element) => element.classList.remove('showOpacity'));
    }


    return (
        <div className="ml-1 pl-1">
            <h1 className="text-xl font-bold my-3 mx-5 pl-3">{title}</h1>
            <div className="movieList-wrapper ml-5 pl-2" id={cat} onMouseLeave={() => movieListHoverOff(cat)} onMouseOver={() => movieListHoverOn(cat)}>
                <div className="movie-card-wrapper">
                    {
                        movies.map((movie) =>( <Movie key={movie?.id} info={movie} />))
                    }
                </div>
                <div className="slider-left cursor-pointer bg-gradient-to-b from-black to-transparent" id={"slider-"+ cat}>
                    <button className="px-3 py-8 border border-gray-500" onClick={() => handlerSliderLeft(cat)} >
                        <h1 className="text-3xl font-bold">‹</h1>
                    </button>
                </div>
                <div className="slider-right cursor-pointer bg-gradient-to-b from-black to-transparent" id={"slider-"+ cat}>
                    <button className="px-3 py-8 border border-gray-500" onClick={() => handlerSliderRight(cat)}>
                        <h1 className="text-3xl font-bold">›</h1>
                    </button>
                </div>
            </div>
        </div>
    
    )
}

export default MovieList;