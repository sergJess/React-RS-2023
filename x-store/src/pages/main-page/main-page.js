import React from 'react';
import './main-page.css';
import { SearchBar } from '../../components/search-bar/search-bar';
import { CardContainer } from '../../components/card-container/card-container';
import { fetchData } from '../../utils/fetch-data/fetch-data';
export class MainPage extends React.Component {
  async getCards(url) {
    const data = await fetchData(url);
    return data;
  }
  render() {
    return React.createElement(
      'div',
      { className: 'main-page', role: 'main-page' },
      React.createElement(
        'div',
        { className: 'main-page__search' },
        React.createElement(SearchBar, { name: 'main-page-search' })
      ),
      React.createElement(CardContainer, {
        cards: this.getCards(
          'https://raw.githubusercontent.com/sergJess/data-mock/main/react-2023-cards.json'
        ),
      })
    );
  }
}
