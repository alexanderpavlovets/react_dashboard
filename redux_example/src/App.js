import React from 'react';
import logo from './logo.svg';
import './App.css';

import Post from './components/Post'
import PostForm from './components/Postform'

function App() {
  return (
    <div className="App">
      <PostForm />
      <Post />
    </div>
  );
}

export default App;
