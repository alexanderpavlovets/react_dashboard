import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Tools from './components/Tools/Tools'
import AboutUs from './components/AboutUs/AboutUs'
import Playground from './components/Playground/Playground'

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tools" component={Tools} />
          <Route path="/about" component={AboutUs} />
          <Route path="/playground" component={Playground} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
