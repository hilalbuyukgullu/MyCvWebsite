import React from 'react'
import { NavHashLink } from 'react-router-hash-link';

export default function Navbar() {
  return (
    <div className='nav-div'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavHashLink className="nav-link menu-button col" aria-current="page" to="/#Home">Home</NavHashLink>
        <NavHashLink className="nav-link menu-button col" to="/#About">About</NavHashLink>
        <NavHashLink className="nav-link menu-button col" to="/#MyProject">My Projects</NavHashLink>
        <NavHashLink className="nav-link menu-button col" to="/#Contact">Contact</NavHashLink>
      </nav>
    </div>
  )
}
