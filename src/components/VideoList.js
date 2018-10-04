import React from 'react';
import VideoListEntry from './VideoListEntry.js';
import { connect } from 'react-redux';
import changeVideoList from '../actions/videoList.js';
 
var VideoList = ({videos, handleVideoListEntryTitleClick}) => (
  <div className="video-list">
    {
      videos.map(video => (
        <VideoListEntry
          key={video.etag}
          video={video}
          handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
        />
      ))
    }
  </div>
);

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

export default VideoList;
