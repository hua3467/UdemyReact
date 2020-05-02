import React from 'react';
import './VideoItem.css';

const VideoItem = (props) => {

    const item = props.video.snippet;

    return(
        <div className="video-item item">
            <img className="ui image" src={item.thumbnails.high.url} alt={item.title} />
            <div className="content">
                <h3 className="header">{item.title}</h3>
                <p>Channel: {item.channelTitle}</p>
            </div>
            
        </div>
    )
}

export default VideoItem;