import { useState, useEffect } from "react";
import Youtube from "../api/youtube";

// 自定義 Video Hook
const useVideo = (defaultTerm) => {
    const [video, setVideo] = useState([]);
    useEffect(() => {
        searchTerm(defaultTerm);
    }, [])

    const searchTerm = async (term) => {
        const Data = await Youtube.get('/search', {
            params: {
                q: term
            }
        })
        setVideo(Data.data.items);
    }

    return [video, searchTerm] // 輸出
}

export default useVideo;