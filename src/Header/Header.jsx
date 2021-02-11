import React from "react"
import "./Header.css"

function Header() {
  return (
    <nav className="z-depth-0">
      <div className="nav-wrapper container">
        <a href="/">
          Schafkopf<span>Kumpel </span>
        </a>
        <span className="right grey-text text-darken-1">
          <i className="material-icons sidenav-trigger" data-target="side-menu">
            view_list
          </i>
        </span>
      </div>
    </nav>
  )
}

export default Header
