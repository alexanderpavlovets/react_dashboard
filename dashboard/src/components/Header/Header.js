import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <ul id="nav">
        <Link className="navLink" to="/">
          <li>HOME</li>
        </Link>

        <Link className="navLink" to="/tools">
          <li>TOOLS</li>
        </Link>

        <Link className="navLink" to="/playground">
          <li>PLAYGROUND</li>
        </Link>

        <Link className="navLink" to="/about">
          <li>ABOUT US</li>
        </Link>
      </ul>
    </header>
  )
}
