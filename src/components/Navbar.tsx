import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  var myfun = function(ele:any){
    let offsetTop  = document.getElementById("about")?.offsetTop;
    var right = document.getElementById("#right");
    window.scrollTo({
      top: offsetTop === null ? offsetTop?-100: 0,
        behavior: "smooth"
    });
}

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
              <NavLink className="nav-link menu-button col" activeClassName="active" to="/" onClick={myfun("about")}>About</NavLink>
              <NavLink className="nav-link menu-button col" activeClassName="active" to="/contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
