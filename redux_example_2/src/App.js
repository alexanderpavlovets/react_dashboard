import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter is {counter}</h1>

      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged
        ? <h3>Info which should be visible only to logged in users</h3>
        : <h3>You are not logged in </h3>
      }
    </div>
  );
}

export default App;
