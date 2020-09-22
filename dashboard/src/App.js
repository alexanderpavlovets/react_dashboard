import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Tools from './components/Tools'
import AboutUs from './components/AboutUs'
import Playground from './components/Playground'

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
