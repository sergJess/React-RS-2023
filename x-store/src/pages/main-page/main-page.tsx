import React from 'react';
import './main-page.css';
import { SearchBar } from '../../components/search-bar/search-bar';
import { APIKEY, TResponseApi } from '../../api/api';
import { CardContainer } from '../../components/card-container/card-container';
import { fetchData } from '../../utils/fetch-data/fetch-data';
export const MainPage = () => {
  const getCards = async (url: string, options?: unknown) => {
    const data = options
      ? await fetchData<TResponseApi[]>(url, options)
      : await fetchData<TResponseApi[]>(url);
    console.log(data);
    if (data == null) {
      const cards: TResponseApi = {
        docs: [],
        limit: 0,
        offset: 0,
        page: 0,
        pages: 0,
        total: 0,
      };
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
        cards={getCards('https://the-one-api.dev/v2/character?limit=16', {
          headers: { Authorization: `Bearer ${APIKEY}` },
        })}
      />
    </div>
  );
};
