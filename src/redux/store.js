import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// Import reducers
import authReducer from './reducers/authReducer';
import dataReducer from './reducers/dataReducer';

const initalState = {};
const middlewares = [thunk];

const reducers = combineReducers({
  auth: authReducer,
  data: dataReducer
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(reducers, initalState, enhancer);

export default store;
