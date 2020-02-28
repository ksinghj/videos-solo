import React from 'react';
// import '../styles/videoplayer.css';

const VideoPlayer = ({ video }) =>{ 
    if(!video) {
        return <div>Video loading...</div>
    } 

    const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="box">
            <iframe 
                    width="500"
                    height="250"
                    title="video-player" 
                    src={videoSrc} 
                    frameborder="0"  
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                    style={{ display: "block", margin: "auto" }}
                 />
        </div>
    );
}

export default VideoPlayer;
