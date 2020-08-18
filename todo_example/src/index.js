import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // <React.StrictMode> // weird default stuff - make things shown up in console twice
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);
