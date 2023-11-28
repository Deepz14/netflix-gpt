import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector((state) => state.movies?.nowPlaying);
    if(movies?.length < 1) return;
    const mainMovie = movies[0];
    const { original_title, overview, id, backdrop_path, poster_path} = mainMovie;
    return (
        <div className="h-[100vh] relative pb-3">
            <VideoBackground movieId={id} posterPath={poster_path} />
            <VideoTitle title={original_title} description={overview} />
        </div>
    )

};

export default MainContainer;