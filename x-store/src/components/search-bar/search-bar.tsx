import React from 'react';
import { defaultQuery } from '../../api/api';
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
  const { searchValue } = useAppSelector((state) => state.search);
  const status = useAppSelector((state) => state.mainCardsStatus);
  const { isError, isLoading, data } = useGetCardsByNameQuery(searchValue);
  const handleSearchChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    const value = input.target.value;
    dispatch(setSearchValue(value));
  };
  const clickToSearch = (e: React.MouseEvent) => {
    e.preventDefault();

    dispatch(setMainCardsStatus({ ...status, isLoading: true }));
    if (isError) {
      dispatch(setMainCardsStatus({ isError: true, isLoading: false }));
      return;
    }
    if (!isLoading && !isError) {
      const datas = data?.docs;
      if (datas) {
        console.log('Jess');
        dispatch(setMainCardsStatus({ isError: false, isLoading: false }));
        dispatch(setMainCards(datas));
      }
    }

    // searchValue == ''
    //   ? props.callback(defaultQuery)
    //   : props.callback(`https://the-one-api.dev/v2/character?name=/${searchValue}/i${strGender}`);
    // props.callbackSetLoading('loading');
  };
  const pressEnterToSearch = (e: React.KeyboardEvent) => {
    if (e.key == 'Enter') {
      const select = props.genderParams.current;
      const strGender = select!.value == 'Both' ? '' : `&&gender=${select!.value}`;
      searchValue == ''
        ? props.callback(defaultQuery)
        : props.callback(`https://the-one-api.dev/v2/character?name=/${searchValue}/i${strGender}`);
      props.callbackSetLoading('loading');
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
