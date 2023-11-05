import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector((state) => state.movies?.nowPlaying);
    if(movies?.length < 1) return;
    const mainMovie = movies[0];
    const { original_title, overview, id} = mainMovie;
    return (
        <div>
            <VideoTitle title={original_title} description={overview} />
            <VideoBackground movieId={id} />
        </div>
    )

};

export default MainContainer;