import React, { useState, useEffect } from 'react';
import './card-container.css';
import { CardInfo } from '../card-info/card-info';
import { Loader } from '../../components/loader/loader';
import { TResponseApi, TApiItem } from '../../api/api';
type TCardContainerProps = {
  cards: Promise<TResponseApi>;
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
        setCards([...cards.docs]);
        setLoadingStatus('loaded');
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
        <p className="container-loading__text">Could not loading from server...</p>
      </div>
    );
  }
  return (
    <div className="card-container">
      {cardsArray.map((item) => {
        return (
          <CardInfo
            birth={item.birth}
            death={item.death}
            gender={item.gender}
            hair={item.hair}
            height={item.height}
            name={item.name}
            race={item.race}
            realm={item.realm}
            spouse={item.spouse}
            wikiUrl={item.wikiUrl}
            _id={item._id}
            key={item._id}
          />
        );
      })}
    </div>
  );
};
