import {combineReducers} from 'redux';
import courses from './courseReducer';

// Route reducer

const rootReducer = combineReducers({
  courses // es6 shorthand property name
});

export default rootReducer;
