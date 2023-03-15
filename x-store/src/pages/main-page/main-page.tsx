import React from 'react';
import './main-page.css';
import { SearchBar } from '../../components/search-bar/search-bar';
import { CardInfo } from '../../components/card-info/card-info';
export class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <div className="main-page__search">
          <SearchBar name="main-page-search" />
        </div>
        <CardInfo
          id={1}
          description="FF7 is the best game"
          dislikes={53}
          likes={777}
          imgSrc=""
          priceDollar={100}
          title="FF7"
        />
      </div>
    );
  }
}
