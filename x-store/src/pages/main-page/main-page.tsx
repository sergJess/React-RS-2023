import React from 'react';
import './main-page.css';
import { SearchBar } from '../../components/search-bar/search-bar';
import { mockCradsInfo } from '../../components/card-info/card-info';
import { CardContainer } from '../../components/card-container/card-container';
export class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page" role="main-page">
        <div className="main-page__search">
          <SearchBar name="main-page-search" />
        </div>
        <CardContainer cards={mockCradsInfo} />
      </div>
    );
  }
}
