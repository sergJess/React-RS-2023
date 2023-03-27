import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
export const Nav = () => {
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
        <NavLink
          className={({ isActive }) => (isActive ? 'nav-link nav-link_active' : 'nav-link')}
          to="/contact-us"
        >
          Contact Us
        </NavLink>
      </nav>
    </>
  );
};
