import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css'

const VideoList = ({ videos }) => {

    const renderedList = videos.map((video) => {
        return <VideoItem video={video} />; 
    });

    return(
        <div className="ui relaxed divided list video-list">
            {renderedList}
        </div>
    )
}

export default VideoList;