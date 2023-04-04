import React from 'react';
import './main-page.css';
import { SearchBar } from '../../components/search-bar/search-bar';
import { TCardInfoProps } from '../../components/card-info/card-info';
import { CardContainer } from '../../components/card-container/card-container';
import { fetchData } from '../../utils/fetch-data/fetch-data';
export const MainPage = () => {
  const getCards = async (url: string) => {
    const data = await fetchData<TCardInfoProps[]>(url);
    if (data == null) {
      const cards: TCardInfoProps[] = [];
      return cards;
    }
    return data;
  };
  return (
    <div className="main-page" role="main-page">
      <div className="main-page__search">
        <SearchBar />
      </div>
      <CardContainer
        cards={getCards(
          'https://raw.githubusercontent.com/sergJess/data-mock/main/react-2023-card.json'
        )}
      />
    </div>
  );
};
