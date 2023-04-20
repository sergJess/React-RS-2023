import React, { useState } from 'react';
import './main-page.css';
import { SearchBar } from '../../components/search-bar/search-bar';
import { intialApiItem } from '../../api/api';
import { CardContainer } from '../../components/card-container/card-container';
import { ModalWindow } from '../../components/modal-window/modal-window';
export const MainPage = () => {
  const [isOpenedModal, setModalOpened] = useState(false);
  const [modalData, setModalData] = useState({
    ...intialApiItem,
  });
  return (
    <div className="main-page" role="main-page">
      <div className="main-page__search">
        <SearchBar />
      </div>
      <CardContainer callback={setModalData} callbackIsCardOpened={setModalOpened} />
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
