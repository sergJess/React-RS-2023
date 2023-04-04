import React from 'react';
import './card-info.css';
import { TApiItem } from '../../api/api';
export const CardInfo = (props: TApiItem) => {
  const cardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log({ ...props });
  };
  return (
    <div className="card-info" onClick={cardClick}>
      <h3 className="card-title">Character:</h3>
      <p className="card-description">Name: {props.name}</p>
      <p className="card-description">Gender: {props.gender}</p>
    </div>
  );
};
