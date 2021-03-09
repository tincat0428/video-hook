import axios from "axios";

const KEY = 'AIzaSyBiYY0A4-RH9Di8EnXKj_IK0n-MaKvogvM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});