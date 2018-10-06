import Redux from 'redux';
import store from '../store/store.js';;
import updateMovieList from '../actions/updateMovieList.js';

var movieListReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.

  state = state || null;
    
    console.log('state in movieListReducer reducer: ',state);
    console.log('action in movieListReducer reducer: ',action);
    switch (action.type) {
        case 'UPDATE_MOVIELIST':
          console.log('action.type is: ',action.type);
            return action.videos;
              
        default:
            return state;
    }
};

export default movieListReducer;
