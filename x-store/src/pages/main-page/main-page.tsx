import React, { useState, useEffect } from 'react';
import './main-page.css';
import { SearchBar } from '../../components/search-bar/search-bar';
import { APIKEY, TResponseApi, emptyApiResponse, intialApiItem, defaultQuery } from '../../api/api';
import { CardContainer } from '../../components/card-container/card-container';
import { ModalWindow } from '../../components/modal-window/modal-window';
import { fetchData } from '../../utils/fetch-data/fetch-data';
export const MainPage = () => {
  const [isOpenedModal, setModalOpened] = useState(false);
  const [modalData, setModalData] = useState({
    ...intialApiItem,
  });
  const [apiRequest, setRequest] = useState(defaultQuery);
  const [propmiseData, setPropmiseData] = useState(new Promise<TResponseApi>(() => {}));
  const [isErrorResponse, setErrorResponse] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState('loading');
  const [checkedGender, setCheckGender] = useState('both');
  const checkGender = (e: React.MouseEvent) => {
    const input = e.target as HTMLInputElement;
    if (input) {
      setCheckGender(input.value);
    }
  };
  useEffect(() => {
    const getCards = async () => {
      const response = await fetchData<TResponseApi>(apiRequest, {
        headers: { Authorization: `Bearer ${APIKEY}` },
      });
      if (response == null) {
        setErrorResponse(true);
        const promiseData = { ...emptyApiResponse };
        return promiseData;
      }
      return response;
    };
    setPropmiseData(getCards());
  }, [apiRequest]);
  return (
    <div className="main-page" role="main-page">
      <div className="main-page__search">
        <SearchBar callback={setRequest} callbackSetLoading={setLoadingStatus} />
      </div>
      <CardContainer
        status={loadingStatus}
        callbackSetStatus={setLoadingStatus}
        callback={setModalData}
        callbackIsCardOpened={setModalOpened}
        isErrorResponse={isErrorResponse}
        cards={propmiseData}
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
