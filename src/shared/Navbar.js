import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { getDisplayName } from '../auth/selectors'
import { logout, login } from '../auth/actions'

function Navbar ({loggedIn, displayName, logout, login}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink to="/" activeClassName="active" className="navbar-brand">
        Event Aggregator
      </NavLink>
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
            <NavLink to="/events" activeClassName="active" className="nav-link">
              My Events
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/school/lsu" activeClassName="active"
                     className="nav-link">
              My School
            </NavLink>
          </li>
        </ul>
        {!loggedIn && (
          <ul className="navbar-nav">
            <li className="nav-item">
              <a onClick={login} className="nav-link">
                Login with Facebook
              </a>
            </li>
          </ul>
        )}
        {loggedIn && (
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Hi, {displayName}
              </Link>
            </li>
            <li className="nav-item">
              <a onClick={logout} className="nav-link">
                Logout
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  displayName: PropTypes.string,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
}

function mapStateToProps (state) {
  return {
    loggedIn: state.auth.loggedIn,
    displayName: getDisplayName(state),
  };
}

export default connect(mapStateToProps, {logout, login})(Navbar)
