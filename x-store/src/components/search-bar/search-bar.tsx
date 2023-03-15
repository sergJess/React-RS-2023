import React from 'react';
import './search-bar.css';

type TSearchBarProps = { name: string };
type TSearchBarState = { value: string };
export class SearchBar extends React.Component<TSearchBarProps, TSearchBarState> {
  constructor(props: TSearchBarProps) {
    super(props);
    this.state = { value: '' };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  handleSearchChange(input: React.ChangeEvent<HTMLInputElement>) {
    const value = input.target.value;
    this.setState({ value: value });
  }

  render() {
    return (
      <div className="search-wrapper">
        <input
          className="search__input"
          type="text"
          placeholder="type something..."
          onChange={this.handleSearchChange}
          value={this.state.value}
        />
        <button className="search__btn">Search</button>
      </div>
    );
  }
}
