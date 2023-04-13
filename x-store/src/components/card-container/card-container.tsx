import React, { useState, useEffect } from 'react';
import './card-container.css';
import { CardInfo } from '../card-info/card-info';
import { Loader } from '../../components/loader/loader';
import { TResponseApi, TApiItem } from '../../api/api';
import { useGetCardsQuery } from '../../redux/api/cards-api';
type TCardContainerProps = {
  callback: (card: TApiItem) => void;
  callbackIsCardOpened: (isOpened: boolean) => void;
  callbackSetStatus: (status: string) => void;
};
export const CardContainer = (props: TCardContainerProps) => {
  const { data, isLoading, isError } = useGetCardsQuery('');
  if (isLoading)
    return (
      <div className="container-loading">
        <Loader />
      </div>
    );
  if (isError) {
    return (
      <div className="container-loading">
        <p className="container-loading__text">Something went wrong</p>
      </div>
    );
  }
  if (data?.docs.length == 0) {
    return (
      <div className="container-loading">
        <p className="container-loading__text">Nothing found</p>
      </div>
    );
  }
  return (
    <div className="card-container">
      {data!.docs.map((item: TApiItem) => {
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
