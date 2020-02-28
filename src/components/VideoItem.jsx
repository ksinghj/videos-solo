import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div style={{maxWidth: "300px", margin: '2em auto'}} className="card" onClick={() => {onVideoSelect(video)}}>
            <div className="card-image">
                <figure className="image is4by3">
                    <img src={video.snippet.thumbnails.high.url} alt={video.snippet.description} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{video.snippet.title}</p>
                    <p className="subtitle is-6">{video.snippet.description}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoItem;
