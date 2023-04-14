import React, { useState, useEffect, useCallback } from 'react';
import './card-container.css';
import { CardInfo } from '../card-info/card-info';
import { Loader } from '../../components/loader/loader';
import { TResponseApi, TApiItem } from '../../api/api';
import { useGetCardsQuery } from '../../redux/api/cards-api';
import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import { setMainCards, setMainCardsStatus } from '../../redux/actions/main-cards/main-cards';
type TCardContainerProps = {
  callback: (card: TApiItem) => void;
  callbackIsCardOpened: (isOpened: boolean) => void;
  callbackSetStatus: (status: string) => void;
};
export const CardContainer = (props: TCardContainerProps) => {
  const { data, isLoading, isError } = useGetCardsQuery('');
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.mainCardsStatus);
  const mainCards = useAppSelector((state) => state.mainCards);
  // if (isLoading) {
  //   dispatch(setMainCardsStatus({ ...status, isLoading: true }));
  // }
  // if (isError) {
  //   dispatch(setMainCardsStatus({ ...status, isError: true }));
  // }
  // if (data?.docs) {
  //   dispatch(setMainCards([...data?.docs]));
  // }
  useEffect(() => {
    if (isLoading) {
      dispatch(setMainCardsStatus({ ...status, isLoading: true }));
      return;
    }
    // if (isError) {
    //   dispatch(setMainCardsStatus({ ...status, isError: true }));
    //   return;
    // }
    // if (data?.docs) {
    //   dispatch(setMainCards([...data?.docs]));
    //   return;
    // }
  }, [status.isLoading]);

  if (status.isLoading)
    return (
      <div className="container-loading">
        <Loader />
      </div>
    );
  if (status.isError) {
    return (
      <div className="container-loading">
        <p className="container-loading__text">Something went wrong</p>
      </div>
    );
  }
  if (mainCards.mainCards.length == 0) {
    return (
      <div className="container-loading">
        <p className="container-loading__text">Nothing found</p>
      </div>
    );
  }
  return (
    <div className="card-container">
      {mainCards.mainCards.map((item: TApiItem) => {
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
