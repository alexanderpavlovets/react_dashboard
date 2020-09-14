import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'



// STORE -> GLOBALIZED STATE

// ACTION "INCREMENT" (describes what is done)
const increment = () => {
  return {
    type: 'INCREMENT' // usually called "type"
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT' // usually called "type"
  }
}

// REDUCER (describes how action will change your state)
/** 
 * @param initialState here is just state with default value 0
 */
const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT': 
      return state - 1;
    default: return state // just linter. Not sure that this is needed here at all. Maybe some error handling ?
  }
}

let store = createStore(counter)

// Display it in the console
store.subscribe(() => console.log(store.getState()));

// DISPATCH (dispatch action to the reducer)
store.dispatch(increment())



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
