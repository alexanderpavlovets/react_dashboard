import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  // Don't know is t a good practise to use a state for just render
  state = {
    actionButtons: [
      {
        text: 'Use some cools tools',
        to: '/tools'
      },
      {
        text: 'Know more about team',
        to: '/about'
      },
      {
        text: 'Explore playground',
        to: '/playground'
      }
    ]
  }

  render() {
    const buttons = this.state.actionButtons.map(button => (
      <Link className="homePageButton" to={button.to}>
          <div>{button.text}</div>
      </Link>
    ))
    return (
      <div id="home">
      <h1>Welcome to Automation Portal</h1>
      <h3>Logo here</h3>
      <h3>Choose your destiny:</h3>
      <div id="homePageButtons">{buttons}</div>
    </div>
    )
  }
}

export default Home
