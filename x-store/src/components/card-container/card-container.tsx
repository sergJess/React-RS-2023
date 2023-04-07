import React, { useState, useEffect } from 'react';
import './card-container.css';
import { CardInfo } from '../card-info/card-info';
import { Loader } from '../../components/loader/loader';
import { TResponseApi, TApiItem } from '../../api/api';
type TCardContainerProps = {
  cards: Promise<TResponseApi>;
  isErrorResponse: boolean;
  callback: (card: TApiItem) => void;
  callbackIsCardOpened: (isOpened: boolean) => void;
};
export const CardContainer = (props: TCardContainerProps) => {
  const cardsArr: TApiItem[] = [];
  const [cards, setCards] = useState(cardsArr);
  const [loadingStatus, setLoadingStatus] = useState('loading');
  useEffect(() => {
    props.cards
      .then((datas) => {
        if (props.isErrorResponse) {
          setLoadingStatus('error');
          return;
        }
        if (datas.docs.length == 0) {
          setLoadingStatus('failed');
        } else {
          setLoadingStatus('loaded');
          setCards([...datas.docs]);
        }
      })
      .catch(() => {
        setLoadingStatus('error');
      });
  }, [props.cards, loadingStatus, props.isErrorResponse]);
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
  if (loadingStatus == 'error') {
    return (
      <div className="container-loading">
        <p className="container-loading__text">Something went wrong</p>
      </div>
    );
  }
  return (
    <div className="card-container">
      {cards.map((item: TApiItem) => {
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
