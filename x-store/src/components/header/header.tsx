import React from 'react';
import { Nav } from '../nav/nav';
import './header.css';

export class Header extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="header__logo">Store</div>
          <Nav />
        </header>
      </>
    );
  }
}
