import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideo from "../hook/useVideo";

const App = () => {

    // 客製一個與 video 相關的 hook，好讓他到處可以重複使用
    const [mainVideo, setMainVideo] = useState(null);
    const [video, searchTerm] = useVideo('cat');

    useEffect(() => {
        setMainVideo(video[0]);
    }, [video]) // 當video改變時，setMainVideo執行。

    // ----------------原code-----------------
    // const [video, setVideo] = useState([]);
    //*const [mainVideo, setMainVideo] = useState(null); ->多餘的

    // useEffect(() => {
    //     searchTerm('cat'); 
    //     //"cat" 是 video 唯一的input
    // }, [])

    // const searchTerm = async (term) => {
    //     const Data = await Youtube.get('/search', {
    //         params: {
    //             q: term
    //         }
    //     })
    //     setVideo(Data.data.items);
    //*    setMainVideo(Data.data.items[0]); ->多餘的
    // }
    //   // output 為 "video, searchTerm"
    // -----------------------------------------

    return (
        <div className="ui container">
            <SearchBar
                searchTerm={searchTerm}
            />
            <div className="ui grid">
                <div className="row">
                    <div className="eleven wide column">
                        <VideoDetail mainVideo={mainVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={video}
                            onSelectVideo={setMainVideo} />
                        {/* onSelectVideo={(video) => setMainVideo(video)} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;