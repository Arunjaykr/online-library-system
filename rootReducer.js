import { combineReducers } from 'redux';
import bookReducer from './bookSlice';  // Make sure this points to the correct slice file

const rootReducer = combineReducers({
  books: bookReducer,  // Combine bookSlice as the books reducer
});

export default rootReducer;
