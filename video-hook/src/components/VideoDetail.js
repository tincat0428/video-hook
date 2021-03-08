import React from "react";

const VideoDetail = ({ mainVideo }) => {
    if (!mainVideo) {
        return <div>Loading....</div>
    }
    const videoUrl = `https://www.youtube.com/embed/${mainVideo.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe src={videoUrl} title={mainVideo.snippet.title} />
            </div>
            <div className="ui segment">
                <h4 className="header">{mainVideo.snippet.title}</h4>
                <p>{mainVideo.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;