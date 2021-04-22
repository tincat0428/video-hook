import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectVideo }) => {

    const VideoList = videos.map((video) => {
        return (
                <VideoItem
                    key={video.id.videoId}
                    video={video}
                    onSelectVideo={onSelectVideo}
                />
        )
    })

    return (
        <div className="ui relaxed divided list">{VideoList}</div>
    )
}

export default VideoList;