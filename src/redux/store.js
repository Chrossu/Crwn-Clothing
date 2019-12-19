import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from './rootReducer';

const initialState = {};

const store = createStore(initialState, rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;