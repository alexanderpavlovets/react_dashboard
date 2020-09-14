import React from 'react';
import './App.css';
import { Provider } from 'react-redux'

import Post from './components/Post'
import PostForm from './components/Postform'

import store from './store'

function App() {
  return (
    // Provider should wrap entire app
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <Post />
      </div>
    </Provider>
  );
}

export default App;
