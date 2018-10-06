import React from 'react';
import MovieList from './../components/MovieList.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

  console.log('state in MovieListContainer: ',state);
  
  return {
    videos: state.movieList    
    }
};

const mapDispatchToProps = (dispatch) => {

   return {     
        
    };
};



var MovieListContainer = connect(mapStateToProps, mapDispatchToProps)(MovieList);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.




export default MovieListContainer;
