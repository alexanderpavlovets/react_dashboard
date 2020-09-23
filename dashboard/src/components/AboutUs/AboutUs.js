import React, { Component } from 'react'
import './AboutUs.css'
import PersonCard from '../PersonCard/PersonCard'
import PersonPhoto from '../../images/user-placeholder.png'

export default class AboutUs extends Component {
  state = {
    leader: {
      id: 1,
      name: 'asd',
      photo: PersonPhoto,
      title: 'asd',
      location: 'asd',
      email: 'asd@asd.com'
    },
    beSquad: [
      {
        id: 100,
        name: 'asd',
        photo: PersonPhoto,
        title: 'asd',
        location: 'asd',
        email: 'asd@asd.com'
      },
      {
        id: 101,
        name: 'asd',
        photo: PersonPhoto,
        title: 'asd',
        location: 'asd',
        email: 'asd@asd.com'
      },
      {
        id: 102,
        name: 'asd',
        photo: PersonPhoto,
        title: 'asd',
        location: 'asd',
        email: 'asd@asd.com'
      }
    ],
    feSquad: [
      {
        id: 200,
        name: 'feasd',
        photo: PersonPhoto,
        title: 'asd',
        location: 'asd',
        email: 'asd@asd.com'
      },
      {
        id: 201,
        name: 'feasd',
        photo: PersonPhoto,
        title: 'asd',
        location: 'asd',
        email: 'asd@asd.com'
      },
      {
        id: 202,
        name: 'feasd',
        photo: PersonPhoto,
        title: 'asd',
        location: 'asd',
        email: 'asd@asd.com'
      },
      {
        id: 203,
        name: 'feasd',
        photo: PersonPhoto,
        title: 'asd',
        location: 'asd',
        email: 'asd@asd.com'
      }
    ],
  }

  render() {
    const beSquad = this.state.beSquad.map(bePerson => (
      <PersonCard key={bePerson.id} data={bePerson} />
    ))
    const feSquad = this.state.feSquad.map(fePerson => (
      <PersonCard key={fePerson.id} data={fePerson} />
    ))
    return (
      <React.Fragment>
        <div id="leaderWrapper">
            <PersonCard data={this.state.leader} />
        </div>
        <div id="squadsWrapper">
          <div className="squad">
            <h3>Back-end Squad</h3>
            {beSquad}
          </div>
          <div className="squad">
            <h3>Front-end Squad</h3>
            {feSquad}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
