import React, { useState } from "react";
import YouTube from "react-youtube";
import "./videosection.css"; 

const VideoSection = ({ videoId, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    width: "100%",  
    height: "550",  
    playerVars: {
      autoplay: 1, 
      controls: 1,  
      modestbranding: 1,
      rel: 0,
    },
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setIsLoading(true); 
  };

  return (
    <div className="video-container">
      {isPlaying ? (
        <div className="video-wrapper">
          {isLoading && (
            <div className="loading-spinner">
              <div className="spinner"></div>
            </div>
          )}
          <YouTube 
            videoId={videoId} 
            opts={options} 
            onReady={() => setIsLoading(false)}
          />
        </div>
      ) : (
        <div
          className="video-thumbnail"
          style={{ backgroundImage: `url(${thumbnail})` }}
        >
          <div className="overlay">
            <h2>Look Our Video</h2>
            <button className="play-button" onClick={handlePlay}>
              ▶ Play
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
