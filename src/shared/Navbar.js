import React from 'react';
import PropTypes from 'prop-types';

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href="/" className="navbar-brand">Event Aggregator</a>
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
            <a href="/" className="nav-link">My Events</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">About</a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">Login</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {};
Navbar.defaultProps = {};

export default Navbar;
