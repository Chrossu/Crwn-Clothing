import { combineReducers } from 'redux';
import directoryReducer from './directory/directory.reducer';

const rootReducer = combineReducers({
  directorySections: directoryReducer
})

export default rootReducer;