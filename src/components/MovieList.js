
import React from 'react';

var MovieList = ({videos, handleVideoListEntryTitleClick}) => (
  <div className="video-list">
    {
      videos.map( (video,idx) => (
        <div key={idx} >{video.title}</div>
      ))
    }
  </div>
);


export default MovieList;