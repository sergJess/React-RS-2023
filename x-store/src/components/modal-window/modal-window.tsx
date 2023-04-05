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
          {props.card.race && <p>race: {props.card.race}</p>}
          {props.card.gender && <p>gender: {props.card.gender}</p>}
          {props.card.realm && <p>realm: {props.card.realm}</p>}
          {props.card.birth && <p>birth: {props.card.birth}</p>}
          {props.card.death && <p>death: {props.card.death}</p>}
          {props.card.wikiUrl && <p>wikiUrl: {props.card.wikiUrl}</p>}
          {props.card.spouse && <p>spouse: {props.card.spouse}</p>}
          {props.card.hair && <p>hair: {props.card.hair}</p>}
          {props.card.height && <p>height: {props.card.height}</p>}
        </div>
      </div>
    </div>
  );
};
