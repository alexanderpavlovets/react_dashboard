import React, { Component } from 'react'
import './PersonCard.css'

export default class PersonCard extends Component {
  render() {
    const { name, photo, title, location, email } = this.props.data
    
    return (
      <div className="personWrapper">
        <img className="personPhoto" src={photo} alt="person"></img>
        <ul className="personData">
            <li><b>Name: </b>{name}</li>
            <li><b>Title: </b>{title}</li>
            <li><b>Location: </b>{location}</li>
            <li><b>email: </b>{email}</li>
        </ul>
      </div>
    )
  }
}
