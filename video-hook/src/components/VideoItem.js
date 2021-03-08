import "./Video.scss"
import React from "react";

const VideoItem = ({ video, onSelectVideo }) => {
    return (
        <div
            className="video-item item"
            onClick={() => onSelectVideo(video)}
        >
            <img src={video.snippet.thumbnails.medium.url} className="ui image" />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
}

export default VideoItem;