import React from 'react';
import './main-page.css';
import { SearchBar } from '../../components/search-bar/search-bar';
export class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <div className="main-page__search">
          <SearchBar name="main-page-search" />
        </div>
      </div>
    );
  }
}
