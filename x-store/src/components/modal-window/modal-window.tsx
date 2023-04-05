import React from 'react';
import './modal-window.css';
import { TApiItem } from '../../api/api';
type TModalWindow = {
  card: TApiItem;
  isOpened: boolean;
  callbackCloseModal: (openModal: boolean) => void;
};
export const ModalWindow = (props: TModalWindow) => {
  const hideModal = (e: React.MouseEvent) => {
    e.preventDefault();
    props.callbackCloseModal(false);
  };
  return (
    <div
      onClick={hideModal}
      className={
        props.isOpened ? 'modal-window modal-window_show' : 'modal-window modal-window_hide'
      }
    >
      <div className="modal">
        <div className="modal-close-inner">
          <div className="modal-close">
            <span onClick={hideModal} className="modal-close__left modal-close__line"></span>
            <span onClick={hideModal} className="modal-close__right modal-close__line"></span>
          </div>
        </div>
        <div className="modal-data">
          {props.card.name && <p>name: {props.card.name}</p>}
          <p>race: {props.card.race}</p>
          <p>gender: {props.card.gender}</p>
          <p>realm: {props.card.realm}</p>
          <p>birth: {props.card.birth}</p>
          <p>death: {props.card.death}</p>
          <p>wikiUrl: {props.card.wikiUrl}</p>
          <p>spouse: {props.card.spouse}</p>
          <p>hair: {props.card.hair}</p>
          <p>height: {props.card.height}</p>
        </div>
      </div>
    </div>
  );
};
