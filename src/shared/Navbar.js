import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink to="/" activeClassName="active" className="navbar-brand">Event
        Aggregator</NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/events" activeClassName="active" className="nav-link">My
              Events</NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/login" activeClassName="active" className="nav-link">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/signup" activeClassName="active" className="nav-link">Sign
              Up</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {};
Navbar.defaultProps = {};

export default Navbar;
