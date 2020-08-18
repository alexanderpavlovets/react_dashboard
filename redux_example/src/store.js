import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers'

// This is an example, how we can use store in App.js - just a variable
/**
 * @param reducer jeneral reducer of all your component's redecers
 * @param state initial state
 * @param adjuster hmmm - some adjuster, to ajust with middleware
 * Please read the doc of redux in github to see details
 */
// const store = createStore(() => [], {}, applyMiddleware())

const initialState = {}

const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
)

export default store
