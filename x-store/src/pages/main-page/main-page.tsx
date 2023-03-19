import React from 'react';
import './main-page.css';
import { SearchBar } from '../../components/search-bar/search-bar';
import { TCardInfoProps } from '../../components/card-info/card-info';
import { CardContainer } from '../../components/card-container/card-container';
import { fetchData } from '../../utils/fetch-data/fetch-data';
export class MainPage extends React.Component {
  async getCards(url: string) {
    const data = await fetchData<TCardInfoProps[]>(url);
    return data;
  }
  render() {
    return (
      <div className="main-page" role="main-page">
        <div className="main-page__search">
          <SearchBar name="main-page-search" />
        </div>
        <CardContainer
          cards={this.getCards(
            'https://raw.githubusercontent.com/sergJess/data-mock/main/react-2023-cards.json'
          )}
        />
      </div>
    );
  }
}
