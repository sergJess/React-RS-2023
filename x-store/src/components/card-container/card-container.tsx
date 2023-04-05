import React, { useState, useEffect } from 'react';
import './card-container.css';
import { CardInfo } from '../card-info/card-info';
import { Loader } from '../../components/loader/loader';
import { TResponseApi, TApiItem } from '../../api/api';
type TCardContainerProps = {
  cards: Promise<TResponseApi>;
  callback: (card: TApiItem) => void;
  callbackIsCardOpened: (isOpened: boolean) => void;
};
export const CardContainer = (props: TCardContainerProps) => {
  const cardsArr: TApiItem[] = [];
  const [cards, setCards] = useState(cardsArr);
  const [loadingStatus, setLoadingStatus] = useState('loading');
  const fillRemoteCards = () => {
    props.cards
      .then((cards) => {
        if (cards.docs.length == 0) {
          setLoadingStatus('failed');
          return;
        }
        setLoadingStatus('loaded');
        setCards([...cards.docs]);
      })
      .catch(() => {
        setLoadingStatus('failed');
      });
  };
  useEffect(() => {
    fillRemoteCards();
  });
  const cardsArray = Array.isArray(props.cards) ? props.cards : cards;
  if (loadingStatus == 'loading')
    return (
      <div className="container-loading">
        <Loader />
      </div>
    );
  if (loadingStatus == 'failed') {
    return (
      <div className="container-loading">
        <p className="container-loading__text">Nothing found</p>
      </div>
    );
  }
  return (
    <div className="card-container">
      {cardsArray.map((item: TApiItem) => {
        return (
          <CardInfo
            key={item._id}
            callbackSetOpened={props.callbackIsCardOpened}
            callback={props.callback}
            card={{ ...item }}
          />
        );
      })}
    </div>
  );
};
