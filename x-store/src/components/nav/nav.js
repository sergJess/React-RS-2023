import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
export class Nav extends React.Component {
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'nav',
        { className: 'nav' },
        React.createElement(
          NavLink,
          {
            className: ({ isActive }) => (isActive ? 'nav-link nav-link_active' : 'nav-link'),
            to: '/',
          },
          'Home'
        ),
        React.createElement(
          NavLink,
          {
            className: ({ isActive }) => (isActive ? 'nav-link nav-link_active' : 'nav-link'),
            to: '/about-us',
          },
          'About Us'
        )
      )
    );
  }
}
