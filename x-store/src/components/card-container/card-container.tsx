import React, { useState, useEffect } from 'react';
import './card-container.css';
import { CardInfo, TCardInfoProps } from '../card-info/card-info';
type TCardContainerProps = {
  cards: TCardInfoProps[] | Promise<TCardInfoProps[]>;
};
export const CardContainer = (props: TCardContainerProps) => {
  const cardsArr: TCardInfoProps[] = [];
  const [cards, setCards] = useState(cardsArr);
  const fillRemoteCards = () => {
    if (!Array.isArray(props.cards)) {
      props.cards.then((cards) => {
        setCards([...cards]);
      });
    }
  };
  useEffect(() => {
    fillRemoteCards();
  });
  const cardsArray = Array.isArray(props.cards) ? props.cards : cards;
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
