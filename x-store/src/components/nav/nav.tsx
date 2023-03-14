import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
export class Nav extends React.Component {
  render() {
    return (
      <>
        <nav className="nav">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about-us">
            About Us
          </Link>
        </nav>
      </>
    );
  }
}
