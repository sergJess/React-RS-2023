import React, { useState, useEffect } from 'react';
import { defaultQuery } from '../../api/api';
import { useAppSelector } from '../../app/hooks/hooks';
import './search-bar.css';
type TSearchBar = {
  callback: (request: string) => void;
  callbackSetLoading: (status: string) => void;
  genderParams: React.RefObject<HTMLSelectElement>;
};
export type stateSearchBar = {
  value: string;
};
export const SearchBar = (props: TSearchBar) => {
  const { value } = useAppSelector((state) => state.search);
  const initialValue =
    localStorage.getItem('search-value') != null ? localStorage.getItem('search-value') : '';
  const [searchValue, setSearchValue] = useState(initialValue !== null ? initialValue : '');
  useEffect(() => {
    return () => {
      localStorage.setItem('search-value', searchValue);
    };
  }, [searchValue]);
  const handleSearchChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    const value = input.target.value;
    setSearchValue(value);
  };
  const clickToSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    const select = props.genderParams.current;
    const strGender = select!.value == 'Both' ? '' : `&&gender=${select!.value}`;
    searchValue == ''
      ? props.callback(defaultQuery)
      : props.callback(`https://the-one-api.dev/v2/character?name=/${searchValue}/i${strGender}`);
    props.callbackSetLoading('loading');
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
