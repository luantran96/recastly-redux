import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!

	var options = {};
	options.query = q;
	options.max = 5;
	options.key = YOUTUBE_API_KEY;


	searchYouTube(options, data => {
		return {
			currentVideo: changeVideo(data[0]),
			videos: changeVideoList(data)
		}
	}); 
};

export default handleVideoSearch;
