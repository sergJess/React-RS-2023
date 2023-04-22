import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
export const Nav = () => {
  if (typeof window !== 'undefined') {
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
  }
  return (
    <>
      <nav>
        <a href="/">Home</a>
        <a href="/about-us">About Us</a>
        <a href="/contact-us">Contact Us</a>
      </nav>
    </>
  );
};
