import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav row">
            {/* <a className="nav-link title">HB</a> */}
              <NavLink className="nav-link menu-button col" activeClassName="active" aria-current="page" to="/">Home</NavLink>
              <NavLink className="nav-link menu-button col" activeClassName="active" to="/about">Features</NavLink>
              <NavLink className="nav-link menu-button col" activeClassName="active" to="/contact">Pricing</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
