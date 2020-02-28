import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map(video => {
        return <VideoItem key={video.id.channelId} video={video} onVideoSelect={onVideoSelect} />
    })

    return renderedList;
}

export default VideoList;
