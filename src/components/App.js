import React from 'react';
import store from '../store/store.js';
import exampleMovieList from '../data/movieListData.js';
import MovieListContainer from '../containers/MovieListContainer.js';
import updateMovieList from '../actions/updateMovieList.js';
import movieListData from '../data/movieListData.js';
import SearchContainer from '../containers/SearchContainer.js';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('Line 14: ',store.getState());
    store.dispatch(updateMovieList(movieListData));
  }

  
  render() {
    
    return (
      <div>
        <div> <SearchContainer /> </div>
          <MovieListContainer />
      </div>
    );
    
  }
}


