import React from 'react';
import './404-page.css';
export class Page404 extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'page-404', role: 'page-404' },
      React.createElement('h2', { className: 'page-404__title' }, 'Page Not Found - Error 404')
    );
  }
}
