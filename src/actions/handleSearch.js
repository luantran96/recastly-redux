import updateMovieList from './updateMovieList.js';
import exampleVideoData from '../data/movieListData.js';

var handleSearch = (q) => {

  return function(dispatch) {
    
    var matchedMovies = [];
      
    exampleVideoData.forEach((movie) => {
      
        if(movie.title.includes(q)) {
          matchedMovies.push(movie);
        }
    });
    
      dispatch(updateMovieList(matchedMovies));
  };  
  
};

export default handleSearch;