import React, { useState } from 'react';
import './main-page.css';
import { SearchBar } from '../../components/search-bar/search-bar';
import { APIKEY, TResponseApi, emptyApiResponse, intialApiItem } from '../../api/api';
import { CardContainer } from '../../components/card-container/card-container';
import { ModalWindow } from '../../components/modal-window/modal-window';
import { fetchData } from '../../utils/fetch-data/fetch-data';
export const MainPage = () => {
  const [isOpenedModal, setModalOpened] = useState(false);
  const [modalData, setModalData] = useState({
    ...intialApiItem,
  });
  const getCards = async (url: string, options?: unknown) => {
    const data = options
      ? await fetchData<TResponseApi>(url, options)
      : await fetchData<TResponseApi>(url);
    if (data == null) {
      const cards: TResponseApi = {
        ...emptyApiResponse,
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
        callback={setModalData}
        callbackIsCardOpened={setModalOpened}
        cards={getCards('https://the-one-api.dev/v2/character?limit=16', {
          headers: { Authorization: `Bearer ${APIKEY}` },
        })}
      />
      <div className="main-page__overlay-inner">
        <ModalWindow
          card={{ ...modalData }}
          isOpened={isOpenedModal}
          callbackCloseModal={setModalOpened}
        />
      </div>
    </div>
  );
};
