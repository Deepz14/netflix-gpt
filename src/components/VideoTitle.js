const VideoTitle = ({title, description}) => {
    return (
        <div className="absolute text-white">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default VideoTitle;