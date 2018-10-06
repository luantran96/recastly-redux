import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/handleSearch.js';

// const mapStateToProps = (state) => {

//     //console.log(state);

//   return {
//     video: state.currentVideo,
//     videos: state.videoList    
//     }
// };

const mapDispatchToProps = (dispatch) => {

   return {     
        handleSearchInputChange: (q) => dispatch(handleVideoSearch(q))
    };
};



var SearchContainer = connect(null, mapDispatchToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.




export default SearchContainer;
