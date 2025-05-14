import { createStore, combineReducers } from 'redux';
import msgreducer from './Message/msgreducer';
import { composeWithDevTools } from '@redux-devtools/extension';

// Combine reducers
const rootReducer = combineReducers({
  message: msgreducer,
});

// Create store with Redux DevTools
const store = createStore(rootReducer, composeWithDevTools());

export default store;