import React, { useEffect } from 'react';
import './card-container.css';
import { CardInfo } from '../card-info/card-info';
import { Loader } from '../../components/loader/loader';
import { TApiItem } from '../../api/api';
import { useGetCardsQuery } from '../../redux/api/cards-api';
import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import { setMainCards, setMainCardsStatus } from '../../redux/actions/main-cards/main-cards';
type TCardContainerProps = {
  callback: (card: TApiItem) => void;
  callbackIsCardOpened: (isOpened: boolean) => void;
};
export const CardContainer = (props: TCardContainerProps) => {
  const { data, isLoading, isError } = useGetCardsQuery('');
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.mainCardsStatus);
  const mainCards = useAppSelector((state) => state.mainCards);
  useEffect(() => {
    if (isLoading) {
      dispatch(setMainCardsStatus({ ...status, isLoading: true }));
      return;
    }
    if (isError) {
      dispatch(setMainCardsStatus({ ...status, isError: true }));
      return;
    }
    if (!isLoading && !isError) {
      const datas = data?.docs;
      if (datas) {
        dispatch(setMainCards([...data?.docs]));
        dispatch(setMainCardsStatus({ ...status, isLoading: false, isError: false }));
      }
    }
  }, [isError, isLoading, dispatch, data?.docs]);

  if (status.isLoading) {
    return (
      <div className="container-loading">
        <Loader />
      </div>
    );
  }

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
