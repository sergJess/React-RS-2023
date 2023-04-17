import React from 'react';
import './card-info.css';
import { TApiItem } from '../../api/api';
type TCardInfo = {
  callback: (card: TApiItem) => void;
  callbackSetOpened: (opened: boolean) => void;
  card: TApiItem;
};
export const CardInfo = (props: TCardInfo) => {
  const cardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    props.callback({ ...props.card });
    props.callbackSetOpened(true);
  };
  return (
    <div className="card-info" onClick={cardClick}>
      <h3 className="card-title">Character:</h3>
      <p className="card-description">Name: {props.card.name}</p>
      <p className="card-description">Gender: {props.card.gender}</p>
    </div>
  );
};
