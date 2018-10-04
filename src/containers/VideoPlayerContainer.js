import { connect } from 'react-redux';
import changeVideo from '../actions/currentVideo.js';
import VideoPlayer from '../components/VideoPlayer.js';


const mapStateToProps = (state) => {
    
  return {
    video: state.currentVideo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateVideo: (video) => dispatch(changeVideo(video))
    };
};


var VideoPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);



//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
