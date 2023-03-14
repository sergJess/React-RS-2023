import React from 'react';
import './search-bar.css';

export class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-wrapper">
        <input className="search__input" type="text" placeholder="type something..." />
        <button className="search__btn">Search</button>
      </div>
    );
  }
}
