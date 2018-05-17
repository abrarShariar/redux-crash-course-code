import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {};
const middleWare = [thunk];

export default const store = createStore(
    rootReducer,
    initialState, 
    applyMiddleware(...middleWare)
  );