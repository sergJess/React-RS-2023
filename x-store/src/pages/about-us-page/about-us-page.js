import React from 'react';
import './about-us-page.css';
export class AboutUsPage extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'about-us-page', role: 'about-us-page' },
      React.createElement('h2', { className: 'about-us__title' }, 'What is X-strore?'),
      React.createElement(
        'p',
        { className: 'about-us__description' },
        'X-store is e-shop where you can find almost everything. X - is a math variable symvolizes the unknown.'
      )
    );
  }
}
