import React from 'react';
import './main-page.css';
import { SearchBar } from '../../components/search-bar/search-bar';
import { TCardInfoProps } from '../../components/card-info/card-info';
import { CardContainer } from '../../components/card-container/card-container';
import { fetchData } from '../../utils/fetch-data/fetch-data';
import { Loader } from '../../components/loader/loader';
export const MainPage = () => {
  const getCards = async (url: string) => {
    const data = await fetchData<TCardInfoProps[]>(url);
    return data;
  };
  return (
    <div className="main-page" role="main-page">
      <div className="main-page__search">
        <SearchBar />
      </div>
      <div>
        <Loader />
      </div>
      <CardContainer
        cards={getCards(
          'https://raw.githubusercontent.com/sergJess/data-mock/main/react-2023-cards.json'
        )}
      />
    </div>
  );
};
