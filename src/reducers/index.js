// this is our master reducers file, doesnt manage jack crap other than teh other reducers
// each reducer will represent a piece of state
// get the combineReducers method from redux
import { combineReducers } from 'redux';

// import each reducer here 
import StudentReducer from './studentReducer';
import StudentReducer2 from './studentReducer2';

const rootReducer = combineReducers({
	// inside here we pass each reducer as a key/property
	// each key/property will be available as state.key/property
	students: StudentReducer,
	students2: StudentReducer2
});








export default rootReducer;