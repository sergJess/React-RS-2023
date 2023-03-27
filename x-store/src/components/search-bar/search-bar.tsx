import React, { useState, useEffect } from 'react';
import './search-bar.css';

export const SearchBar = () => {
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
      <button className="search__btn">Search</button>
    </div>
  );
};
