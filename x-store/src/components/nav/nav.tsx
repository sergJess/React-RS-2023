import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
export class Nav extends React.Component {
  render() {
    return (
      <>
        <nav className="nav">
          <NavLink
            className={({ isActive }) => (isActive ? 'nav-link nav-link_active' : 'nav-link')}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'nav-link nav-link_active' : 'nav-link')}
            to="/about-us"
          >
            About Us
          </NavLink>
        </nav>
      </>
    );
  }
}
