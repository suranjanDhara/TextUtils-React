import React from 'react'
import PropTypes from 'prop-types'
import { a } from 'react-router-dom'


export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><h2><strong>{props.title}</strong></h2></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/"><strong>Home</strong></a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-a active" aria-current="page" href="/about">{props.aboutText}</a>
            </li> */}
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className={`form-check form-switch mx-2`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className={`form-check-label text-${props.textMode}`} htmlFor="flexSwitchCheckDefault">Enable {props.textMode} mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired

}

NavBar.defaultProps = {
  title: "Set title here",
  aboutText: "About"
}