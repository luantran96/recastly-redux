import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
import changeVideoList from './../actions/videoList.js';


const mapStateToProps = (state) => {

    console.log(state);

    return {
        videos: state.videoList
        };

}
const mapDispatchToProps = (dispatch) => {
    return {
        handleVideoListEntryTitleClick: (videos) => dispatch(changeVideoList(videos))
    };
};

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);



//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
