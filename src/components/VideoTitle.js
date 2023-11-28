const VideoTitle = ({title, description}) => {
    return (
        <div className="text-lg w-1/3 p-2 text-white video-title-container">
            <div>
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="pt-8">{description}</p>
                <div className="button-container mt-5 pt-3">
                    <button className="px-5 py-2 text-xl font-semibold text-black bg-white rounded mr-3">▶ <span className="pl-1">Play</span></button>
                    <button className="px-5 py-2 text-xl font-semibold text-white bg-gray-500 rounded"> <span>More Info</span></button>
                </div>
            </div>
        </div>
    )
}

export default VideoTitle;