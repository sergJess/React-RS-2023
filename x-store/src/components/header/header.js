import React from 'react';
import { Nav } from '../nav/nav';
import './header.css';
export class Header extends React.Component {
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'header',
        { className: 'header' },
        React.createElement('div', { className: 'header__logo' }, 'Store'),
        React.createElement(Nav, null)
      )
    );
  }
}
