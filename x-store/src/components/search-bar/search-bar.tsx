import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks/hooks';
import { setSearchValue } from '../../redux/actions/search-bar/search-bar';
import { useGetCardsByNameQuery } from '../../redux/api/cards-api';
import { setMainCards, setMainCardsStatus } from '../../redux/actions/main-cards/main-cards';
import './search-bar.css';
type TSearchBar = {
  callback: (request: string) => void;
  callbackSetLoading: (status: string) => void;
  genderParams: React.RefObject<HTMLSelectElement>;
};
export type TSearchBarState = {
  searchValue: string;
};
export const SearchBar = (props: TSearchBar) => {
  const dispatch = useAppDispatch();
  // const select = props.genderParams.current;
  // const strGender = select!.value == 'Both' ? '' : `${select!.value}`;
  // console.log(strGender);
  const { searchValue } = useAppSelector((state) => state.search);
  const status = useAppSelector((state) => state.mainCardsStatus);
  const { isError, isLoading, data } = useGetCardsByNameQuery(searchValue);
  const handleSearchChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    const value = input.target.value;
    dispatch(setSearchValue(value));
  };
  const sendRequest = () => {
    dispatch(setMainCardsStatus({ ...status, isLoading: true }));
    if (isError) {
      dispatch(setMainCardsStatus({ isError: true, isLoading: false }));
      return;
    }
    console.log(status.isLoading);
    if (!isLoading && !isError) {
      const datas = data?.docs;
      if (datas) {
        setTimeout(() => {
          dispatch(setMainCardsStatus({ isError: false, isLoading: false }));
          dispatch(setMainCards(datas));
        }, 800);
      }
    }
  };
  const clickToSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    sendRequest();
  };
  const pressEnterToSearch = (e: React.KeyboardEvent) => {
    if (e.key == 'Enter') {
      sendRequest();
    }
  };
  return (
    <div className="search-wrapper">
      <input
        role="search"
        className="search__input"
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        onKeyDown={pressEnterToSearch}
        placeholder="type something..."
      />
      <button onClick={clickToSearch} className="search__btn">
        Search
      </button>
    </div>
  );
};
