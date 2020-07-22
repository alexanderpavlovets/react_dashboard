import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => {
    // [e.target.name] here for example. Used when need to handle several inputs in one form
    // property in state should match to "name" attribute of input - "title" here.
    this.setState({[e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.title)
    this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
        <input
          type="text"
          name="title"
          style={{flex: '10', padding: '5px'}}
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this.onChange}>
        </input>
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{flex: '1'}}>
        </input>
      </form>
    )
  }
}

export default AddTodo
