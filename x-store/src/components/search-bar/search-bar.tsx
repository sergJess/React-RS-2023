import React, { useState, useEffect } from 'react';
import './search-bar.css';
type TSearchBar = {
  callback: (reques: string) => void;
};
export const SearchBar = (props: TSearchBar) => {
  const initialValue =
    localStorage.getItem('search-value') != null ? localStorage.getItem('search-value') : '';
  const [searchValue, setSearchValue] = useState(initialValue !== null ? initialValue : '');
  useEffect(() => {
    return () => {
      localStorage.setItem('search-value', searchValue);
    };
  });
  const handleSearchChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    const value = input.target.value;
    setSearchValue(value);
  };
  const clickToSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    props.callback(`https://the-one-api.dev/v2/character?name=${searchValue.trim()}&&limit=16`);
  };
  return (
    <div className="search-wrapper">
      <input
        role="search"
        className="search__input"
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="type something..."
      />
      <button onClick={clickToSearch} className="search__btn">
        Search
      </button>
    </div>
  );
};
