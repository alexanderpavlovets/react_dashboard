import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';
import { v4 as uuidv4 } from 'uuid'


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out smth',
        completed: false
      },
      {
        id: 2,
        title: 'Action 2',
        completed: false
      },
      {
        id: 3,
        title: 'Action 3',
        completed: false
      }
    ]
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
  delTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    })
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}


export default App;
