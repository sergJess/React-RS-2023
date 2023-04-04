import React, { useState, useEffect } from 'react';
import './card-container.css';
import { CardInfo, TCardInfoProps } from '../card-info/card-info';
import { Loader } from '../../components/loader/loader';
type TCardContainerProps = {
  cards: TCardInfoProps[] | Promise<TCardInfoProps[]>;
};
export const CardContainer = (props: TCardContainerProps) => {
  const cardsArr: TCardInfoProps[] = [];
  const [cards, setCards] = useState(cardsArr);
  const [loadingStatus, setLoadingStatus] = useState('loading');
  const fillRemoteCards = () => {
    if (!Array.isArray(props.cards)) {
      props.cards
        .then((cards) => {
          if (cards.length == 0) {
            setLoadingStatus('failed');
            return;
          }
          setCards([...cards]);
          setLoadingStatus('loaded');
        })
        .catch(() => {
          setLoadingStatus('failed');
        });
    }
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
    <div className="container-loading">
      <p className="container-loading__text">Could not loading from server...</p>
    </div>;
  }
  return (
    <div className="card-container">
      {cardsArray.map((item) => {
        return (
          <CardInfo
            key={item.id}
            description={item.description}
            dislikes={item.dislikes}
            likes={item.likes}
            imgSrc={item.imgSrc}
            priceDollar={item.priceDollar}
            title={item.title}
            id={item.id}
          />
        );
      })}
    </div>
  );
};
