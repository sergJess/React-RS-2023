import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './nav.css';
export class Nav extends React.Component {
  render() {
    return (
      <>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
        </nav>
      </>
    );
  }
}
