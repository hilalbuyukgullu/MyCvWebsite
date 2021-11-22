import React from 'react'
import { NavHashLink } from 'react-router-hash-link';

export default function Navbar() {
  return (
    <div className='nav-div'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="row">
        <NavHashLink className="nav-link menu-button col-2 col-sm-3" aria-current="page" to="/#Home">Home</NavHashLink>
        <NavHashLink className="nav-link menu-button col-2 col-sm-3" to="/#About">About</NavHashLink>
        <NavHashLink className="nav-link menu-button col-2 col-sm-3" to="/#MyProject">Projects</NavHashLink>
        <NavHashLink className="nav-link menu-button col-2 col-sm-3" to="/#Contact">Contact</NavHashLink>
        </div>
      </nav>
    </div>
  )
}
