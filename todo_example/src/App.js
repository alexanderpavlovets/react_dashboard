import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

import './App.css';


class App extends Component {
  state = {
    todos: []
  }

  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    this.setState({ todos: res.data })
  }

  // Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  // Delete Todo
  delTodo = async (id) => {
    const delResp = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    })
  }

  // Add Todo
  addTodo = async (title) => {
    const postResp = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false })
    // this jsonplaceholder service returns object as we need.
    this.setState({ todos: [...this.state.todos, postResp.data] })
  }

  render() {
    return (
      <Router> 
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => ( // don't know why "props" are here - may be just arrow. Investigate. 
              <React.Fragment> 
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
