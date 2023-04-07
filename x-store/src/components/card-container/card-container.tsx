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
  callbackSetStatus: (status: string) => void;
  status: string;
};
export const CardContainer = (props: TCardContainerProps) => {
  const cardsArr: TApiItem[] = [];
  const [cards, setCards] = useState(cardsArr);
  useEffect(() => {
    setTimeout(() => {
      props.cards
        .then((datas) => {
          if (props.isErrorResponse) {
            props.callbackSetStatus('error');
            return;
          }
          if (datas.docs.length == 0) {
            props.callbackSetStatus('failed');
          } else {
            props.callbackSetStatus('loaded');
            setCards([...datas.docs]);
          }
        })
        .catch(() => {
          props.callbackSetStatus('error');
        });
    }, 800);
  }, [props.cards, props.isErrorResponse, props]);
  if (props.status == 'loading')
    return (
      <div className="container-loading">
        <Loader />
      </div>
    );
  if (props.status == 'failed') {
    return (
      <div className="container-loading">
        <p className="container-loading__text">Nothing found</p>
      </div>
    );
  }
  if (props.status == 'error') {
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
